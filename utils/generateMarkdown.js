generateMarkdown = (answers) => {
  const { 
    title, 
    description, 
    url,
    userStoryRole,
    userStoryGoal,
    userStoryReason,
    installation,
    usage,
    contribution,
    test, 
    license
  } = answers;
  
  return `
    # ${title}

    ## Description
    ${description}

    ### Link to project
    ${url}

    \```
    AS A ${userStoryRole}
    I WANT ${userStoryGoal}
    SO THAT ${userStoryReason}
    \```

    ## Table of Contents
    * [Installation](#installation)
    * [License](#license)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contribution
    ${contribution}

    ## Tests
    ${test}

    ## License
    ${license}

`;
}

module.exports = generateMarkdown;
