import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {usePluginData} from "@docusaurus/useGlobalData";

export default function getIcon(id) {
    const iconsMap = usePluginData('icon-plugin', 'default');
    const icon = iconsMap[id];
    return (icon && <FontAwesomeIcon icon={icon}/>);
}
