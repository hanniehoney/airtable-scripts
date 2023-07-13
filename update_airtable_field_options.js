// Prompt the user for input
let inputString = await input.textAsync('Enter the options, preceded by "number: "');

// Split the input into an array
let optionsArray = inputString.split(/\d+: "/).slice(1).map(option => option.slice(0, -1));

// Get the table
let table = base.getTable("SourceImages");

// Get the field
let field = table.getField("Sub-cat");

// Update the field options
await field.updateOptionsAsync({
    choices: optionsArray.map(name => ({name: name}))
}, {enableSelectFieldChoiceDeletion: true});

// Export
console.log(optionsArray);
