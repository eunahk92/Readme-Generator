const inquirer = require("inquirer");
const dotenv = require("dotenv");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const { questions } = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    await writeFileAsync("README.md", generateMarkdown(answers));
    console.log("Successfully wrote to README.MD")
  }
  catch(err) {
    console.log(err);
  }
}

init();