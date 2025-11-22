import React from 'react';

import {useCurrentSidebarCategory, useDoc} from '@docusaurus/plugin-content-docs/client';

export default function ServiceBanner({name, buyLink, img}) {
    const doc = useDoc();
    const sidebarCategory = useCurrentSidebarCategory();
    const sidebarName = name ?? sidebarCategory.label.props?.children[1] ?? null;
    let alt = sidebarName ? `خرید سرویس ابری ${sidebarName} از چابکان` : doc.contentTitle;

    return (
        <a href={buyLink}>
            <img
                src={img}
                alt={alt}
            />
        </a>
    )
}