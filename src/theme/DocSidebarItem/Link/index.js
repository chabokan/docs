import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import setIcon from "../../../plugins/chabokan-docusaurus-icon-plugin/setIcon";

export default function LinkWrapper(props) {
    setIcon(props.item)
    return (<Link {...props} />);
}
