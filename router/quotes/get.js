const json_manager = require("../../utils/json_manager");
const os = require("os");
const dotenv = require("dotenv");
dotenv.config();

const { DATA } = process.env;


const get_quote = (req, res) => {
  const data = json_manager.read_json_file(DATA);
  const number = Math.floor(Math.random() * data.length);
  if (data.error) {
    res.send(data.error);
  } else {
      const { phrase } = data[number];
      res.status(200).send(phrase + " - Container Id: " + os.hostname());
  }
}



module.exports = { get_quote };