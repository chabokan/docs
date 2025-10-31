import * as fs from "node:fs";
import * as path from "node:path";

const matter = require("gray-matter");

async function getAllMarkdownFiles(dir) {
    let results = [];
    const entries = await fs.promises.readdir(dir, {withFileTypes: true});
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const sub = await getAllMarkdownFiles(fullPath);
            results = results.concat(sub);
        } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
            results.push(fullPath);
        }
    }
    return results;
}

function getId(url) {
    let parts = url.split('/');
    let id = "";

    for (let i = parts.length - 1; i >= 0; i--) {
        let part = parts[i];
        if (part === 'docs')
            break;

        id = '/' + part + id;
    }

    return id.replace(/\/\d+-/g, '/')
        .replace(/\.md$/, '')
        .replace("index", "");
}


export default async function iconPlugin(context, options) {
    return {
        name: 'icon-plugin',

        async loadContent() {
            const docsPath = path.join(context.siteDir, options.path || 'docs');
            const files = await getAllMarkdownFiles(docsPath)

            const iconsMap = {};
            const module = await import('@fortawesome/free-solid-svg-icons');

            for (const file of files) {
                const content = await fs.promises.readFile(file, 'utf-8');
                const {data: frontMatter} = matter(content);
                let id = getId(file);
                if (frontMatter && frontMatter.icon)
                    iconsMap[id] = module[frontMatter.icon] || null;
                else
                    console.warn(`document [${id}] does not have any icon`);
            }

            return iconsMap;
        },

        async contentLoaded({content, actions}) {
            actions.setGlobalData(content);
        },
    };
}