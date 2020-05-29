generateMarkdown = (answers) => {
  const { title, description, url, userStoryRole, userStoryGoal, userStoryReason, installation, usage, contribution, test, license, username, email } = answers;
  
  return `
  # ${title}

  [![GitHub license](https://img.shields.io/github/license/eunahk92/Readme-Generator)](${url})
  
  ## Description
  ${description}

  ## User Story
  \`\`\`
  AS A ${userStoryRole}
  I WANT ${userStoryGoal}
  SO THAT ${userStoryReason}
  \`\`\`
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  \`\`\` ${installation} \`\`\`
  
  ## Usage
  ${usage}
  
  ## Contribution
  ${contribution}
  
  ## Tests
  \`\`\` ${test} \`\`\`
  
  ## License
  ${license}

  ## Questions
  If you have any questions about the repo, open an issue or contact [${username}](https://github.com/eunahk92) directly at ${email}.

  `  
}

module.exports = generateMarkdown;