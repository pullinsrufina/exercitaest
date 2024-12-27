function traverseTree(root) {
    var left = root.left,
        right = root.right,
        current = root.value;
    
    console.log("Left node:", left);
    console.log("Right node:", right);
    console.log("Current value:", current);
}

var tree = {
    value: 10,
    left: {value: 5},
    right: {value: 15}
};

traverseTree(tree);
