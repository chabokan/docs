import React from 'react';

import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from "@docusaurus/useGlobalData";
import ServiceLogo from "../ServiceLogo";

export default function RelatedServices() {
    const {metadata} = useDoc();

    const children = usePluginData('related-docs-plugin', 'default');
    const id = metadata?.frontMatter?.id;
    const parentId = metadata?.frontMatter?.parentId;

    let content = null;

    if (id && !parentId)
        content = <List items={children[id]}/>;
    else if (id && parentId)
        content = <FamilyList siblingsIds={children[parentId]} selfId={id} parentId={parentId}/>;

    return content;

}

function List({items}) {
    if (!items?.length)
        return null;

    return (
        <>
            <h2>سرویس‌های مرتبط</h2>
            {items.map(childId => <ServiceLogo key={childId} id={childId} linkMode="index"/>)}
        </>
    );
}

function FamilyList({siblingsIds, selfId, parentId}) {
    if (!siblingsIds?.length) return null;
    const list = [parentId];
    siblingsIds.filter(id => id !== selfId)
        .forEach(sibId => list.push(sibId))

    return <List items={list}/>
}
