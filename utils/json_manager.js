const fs = require("fs");

function read_json_file(path) {
  try {
    const content = fs.readFileSync(path, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error while reading JSON file:", error);
    return { error: "Error while reading JSON file" };
  }
}


function update_json_file(path, data) {
  try {
    data = JSON.stringify(data, null, 2);
    fs.writeFileSync(path, data, "utf8");
  } catch (error) {
    console.error("Error while updating JSON file:", error);
    return error;
  }
}

module.exports = { read_json_file, update_json_file };