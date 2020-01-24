var friends = ['Linda', 'Karen', 'Susan', 'Chuck', 'Larry'];

    
    for (let i = 0; i < friends.length; i++) {
        mahgod(friends[i]);
    }

function mahgod(person) {
    console.log(person.toUpperCase() + ":");
    var code_lines = 99;
    var string1 = "lines of code";
    var string3 = "line of code";
    var string2 = "strikes one out, clears it all out";
    while (code_lines > 0) {
        if (code_lines == 1) {
            console.log(code_lines + " " + string3 + " in the file, " + code_lines + " " + string3 + ", " + person + " " + string2 + ", " + "no more code in the file.");
        } else {
            console.log(code_lines + " " + string1 + " in the file, " + code_lines + " " + string1 + ", " + person + " " + string2 + ", " + (code_lines - 1) + " " + string1 + ".");

        }
        code_lines = code_lines - 1;

    }

};
