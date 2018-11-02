function getDependencies(tree, result) {
    result = result || [];
    var dependencies = tree.dependencies || {};
    if (!tree.dependencies) return [];

    Object.keys(dependencies).forEach(dependency => {
        let s = dependency + "@" + dependencies[dependency].version;
        if (result.indexOf(s) < 0) {
            result.push(s);
        }
        getDependencies(dependencies[dependency], result);
    });

    return result.sort();

}

module.exports = getDependencies;