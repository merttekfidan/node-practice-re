const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");
const fileName = "./install-node.mp4";
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName);
  console.log("asd");
  res.writeHead(200, {
    "Content-Length": size,
    "Content-Type": "video/mp4",
  });
  createReadStream(file).pipe(res);
}).listen(3000, () => console.log("Server is running - 3000"));
