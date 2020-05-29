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

    const { username, title } = answers;
    const str = `You have successfully wrote a README.MD for your ${title} repo.`
    const strLength = str.length;
    let border = "-".repeat(strLength);

    const successMsg = `
      ${border}
      ${str}
      ${border}
    `

    console.log(successMsg);
  }
  catch(err) {
    console.log(err);
  }
}

init();