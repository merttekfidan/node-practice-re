const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/file.txt", "UTF-8");
const writeStream = fs.createWriteStream(__dirname + "/file_copy.txt", "UTF-8");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("error", (err) => {
  console.log("Upss: " + err);
});

writeStream.on("end", () => {
  console.log("It is done!");
});
