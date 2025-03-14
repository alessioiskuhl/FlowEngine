import * as Blockly from "blockly";

// Define a custom move block
Blockly.Blocks['move'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move")
            .appendField(new Blockly.FieldNumber(10), "STEPS")
            .appendField("steps");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generate JavaScript code from blocks
Blockly.JavaScript['move'] = function(block) {
    var steps = block.getFieldValue('STEPS');
    return `move(${steps});\n`;
};

