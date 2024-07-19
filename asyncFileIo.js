const fs = require("node:fs");

const FILENAME = "test.txt";
let written = false;

fs.writeFile(FILENAME, "hello world", (err) => {
  setTimeout(() => {
    if (err) {
      console.error("[writeFile] ", err);
      return;
    }
    written = true;
  }, 100);
});

fs.readFile(FILENAME, (err, data) => {
  if (!written) {
    console.error(`[readFile] ${FILENAME} isn't written yet!`);
    return;
  }
  if (err) {
    console.error("[readFile] ", err);
    return;
  }
  console.log(data.toString());
});

fs.unlink(FILENAME, () => {});
