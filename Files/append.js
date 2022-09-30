var fs = require("fs");
console.log("Writing into a file");
fs.appendFile("info.txt", "\n This is my new line added now!!!!", function(err)
{
    if (err)
    {
        return cconsole.error(err);
    }
    console.log("Done Appending into a file !!! ");
})