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

        if (id === "")
            id = part;
        else
            id = part + '/' + id;
    }

    return id.replace(/\d+-/g, '')
        .replace(/\.md$/, '');
}


export default async function iconPlugin(context, options) {
    return {
        name: 'related-docs-plugin',

        async loadContent() {
            const docsPath = path.join(context.siteDir, options.path || 'docs');
            const files = await getAllMarkdownFiles(docsPath)
            
            const children = {};

            for (const file of files) {
                const content = await fs.promises.readFile(file, 'utf-8');
                const {data: frontMatter} = matter(content);
                const id = getId(file);

                if (frontMatter.parentId) {
                    if (!children[frontMatter.parentId]) {
                        children[frontMatter.parentId] = [];
                    }

                    children[frontMatter.parentId].push(id);
                }
            }

            return children;
        },

        async contentLoaded({content, actions}) {
            actions.setGlobalData(content);
        },
    };
}