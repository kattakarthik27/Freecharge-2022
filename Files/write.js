var fs = require("fs");
console.log("Install Node");
fs.writeFile("info.txt", "Done with the Installation", function(err)
{
    if(err)
    {
        return console.error(err);
    }
    console.log("Done writing into a File");
})