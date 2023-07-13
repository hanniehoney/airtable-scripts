// Get the table
let table = base.getTable("Your Table Name");

// Get the field
let field = table.getField("Your Field Name");

// Get the options
let options = field.options;

// Get the choices from the options
let choices = options.choices;

// Extract the names of the choices
let choiceNames = choices.map(choice => choice.name);

// // Output the choice names
output.inspect(choiceNames);
