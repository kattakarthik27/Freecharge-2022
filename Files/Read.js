var fs = require("fs");
console.log("Reading from a file !!!");
fs.readFile("info.txt", function(err, data)
{
    if(err)
    {
        return console.error(err);
    }
    console.log("Done Read is: " + data.toString());
});