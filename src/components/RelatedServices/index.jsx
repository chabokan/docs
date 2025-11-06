import React from 'react';
import Link from '@docusaurus/Link';

import {useDoc, useDocById} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from "@docusaurus/useGlobalData";

export default function RelatedServices() {
    const {metadata} = useDoc();

    const children = usePluginData('related-docs-plugin', 'default');
    const id = metadata?.id;
    const parentId = metadata?.frontMatter?.parentId;

    if (id && !parentId) {
        return <ChildrenList childrenIds={children[id]} parentId={id}/>;
    } else if (id && parentId) {
        return <FamilyList siblingsIds={children[parentId]} selfId={id} parentId={parentId}/>;
    } else {
        return null;
    }
}

function FamilyList({siblingsIds, selfId, parentId}) {
    const parent = useDocById(parentId);
    if (!siblingsIds?.length) return null;
    const parentLink = (
        <Link to={'/' + parent.id.replace("index", "")}>
            {parent.title || parent.id}
        </Link>
    );

    if (siblingsIds?.length <= 1) {
        return (
            <h3>
                {"قدرت‌گرفته از "}
                {parentLink}
            </h3>
        );
    } else

        return (
            <div className="related-services">
                <h3>
                    {"دیگر سرویس‌های مبتنی بر "}
                    {parentLink}
                </h3>

                <ul>
                    {siblingsIds.filter(id => id !== selfId).map(sibId => {
                        const sibling = useDocById(sibId);
                        if (!sibling) return null;
                        return (
                            <li key={sibId}>
                                <Link to={'/' + sibling.id.replace("index", "")}>
                                    {sibling.title || sibId}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
}

function ChildrenList({childrenIds, parentId}) {
    const parent = useDocById(parentId);
    if (!childrenIds?.length) return null;

    return (
        <div className="related-services">
            <h3>سرویس‌های مبتنی بر {parent.title || parent.id}</h3>
            <ul>
                {childrenIds.map(childId => {
                    const child = useDocById(childId);
                    if (!child) return null;
                    return (
                        <li key={childId}>
                            <Link to={'/' + child.id.replace("index", "")}>
                                {child.title || childId}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}