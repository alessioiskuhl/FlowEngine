let sprite = { x: 100, y: 100 };

function move(steps) {
    sprite.x += steps;
}

// Run blocks when button is clicked
document.getElementById("run").addEventListener("click", function() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);
});

