const globalLogos = getGlobalLogos();

const flatGlobalLogos = Object.values(getGlobalLogos()).reduce((acc, group) => {
    Object.entries(group).forEach(([key, value]) => {
        acc[key] = value;
    });
    return acc;
}, {});

function getGlobalLogos() {
    const context = require.context("@site/src/data/logo", false, /\.json$/);

    const allLogos = context.keys().reduce((acc, key) => {
        const category = key.replace("./", "").replace(".json", "");
        acc[category] = context(key);
        return acc;
    }, {});

    return allLogos;
}

export {
    globalLogos,
    flatGlobalLogos
}