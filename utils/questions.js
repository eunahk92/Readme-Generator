module.exports = {
  questions: [
      {
        type: "input",
        name: "username",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
      {
        type: "input",
        name: "title",
        message: "What is your project's name?"
      },
      {
        type: "input",
        name: "url",
        message: "What is the URL to your repo?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
      },
      {
        type: "input",
        name: "userStoryRole",
        message: "For your project's user story: what is the ROLE of the user story? (Finish: AS A...)"
      },
      {
        type: "input",
        name: "userStoryGoal",
        message: "For your project's user story: what is the GOAL of the user story? (Finish: I WANT...)"
      },
      {
        type: "input",
        name: "userStoryReason",
        message: "For your project's user story: what is the REASON of the user story? (Finish: SO THAT...)"
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing to the repo?"
      }
    ]
}