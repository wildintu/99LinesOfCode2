var friends = ['Linda', 'Karen', 'Susan', 'Chuck', 'Larry'];

const button = document.getElementsByClassName('btn')[0];


button.addEventListener('click', function () {
    
for (let i = 0; i < friends.length; i++) {
        //create friend headers
        //console.log(friends[i]);
        let h2 = document.createElement('h2');
        let h2Text = document.createTextNode(`${friends[i]}`);
        h2.appendChild(h2Text);
        document.body.appendChild(h2);
        //console.log(h2);
        song(friends[i]);
        

    function song(person) {
        //console.log(person.toUpperCase() + ":");
        var code_lines = 99;
        //var string1 = "lines of code";
        //var string3 = "line of code";
        //var string2 = "strikes one out, clears it all out";
        while (code_lines > 0) {
            if (code_lines == 1) {
                let paragraph = document.createElement('p');
                document.body.appendChild(paragraph);
                let pText = document.createTextNode(`${(code_lines)} line of code in the file, ${(code_lines)} line of code; ${friends[i]} strikes one out, clears it all out, ${(code_lines - 1)} line of code in the file.`)
                paragraph.appendChild(pText);
                //console.log(code_lines + " line of code in the file, " + code_lines + " line of code, " + person + " " + string2 + ", " + "no more code in the file.");
            } else {
                let paragraph2 = document.createElement('p');
                document.body.appendChild(paragraph2)
                let pText2 = document.createTextNode(`${(code_lines)} lines of code in the file, ${(code_lines)} lines of code; ${friends[i]} strikes one out, clears it all out, ${(code_lines - 1)} lines of code in the file.`);
                paragraph2.append(pText2);
                //console.log(code_lines + " " + string1 + " in the file, " + code_lines + " " + string1 + ", " + person + " " + string2 + ", " + (code_lines - 1) + " " + string1 + ".");

            }
            code_lines = code_lines - 1;

            
        }
    }
    };


});
