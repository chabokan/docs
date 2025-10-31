import getIcon from "./getIcon";
import React from "react";

export default function setIcon(item) {
    let iconIsSet = item.iconIsSet;
    if (!iconIsSet) {
        let label = item.label;
        const icon = getIcon(item.href);
        item.iconIsSet = true;
        item.label = (
            <div style={{display: 'inline-flex', alignItems: 'center', gap: '0.5em'}}>
                {icon}
                {label}
            </div>
        );
    }
}
