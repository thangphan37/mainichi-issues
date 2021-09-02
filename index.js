const inquirer = require('inquirer')
const ISSUE_TEMPLATE = `
/**
 * Issue: TODO
 * 🤬sub-issue:
 * 🤬sub-issue:
 * 🤬sub-issue:
 */
`
const SUB_ISSUE_TEMPLATE = `
/**
 * Sky(sub-issue):
 * 
 * Rain(I have to consider):

 * 👉
 * Umbrella(I’m going to do):
	* ✌️
 	* ✌️
 	* ✌️

 * 👉
 * Umbrella(I’m going to do):
	* ✌️
 	* ✌️
 	* ✌️

 * 👉
 * Umbrella(I’m going to do):
	* ✌️
 	* ✌️
 	* ✌️
 
 * Why-What-How-Where
 *
 * ✌️Why A?
 * ✌️Why B?
 * ✌️Why C?
 */
`

function pbcopy(data) {
  const proc = require('child_process').spawn('pbcopy')
  proc.stdin.write(data)
  proc.stdin.end()
}

async function makeIssues() {
  const {numberOfIssue} = await inquirer.prompt({
    type: 'number',
    name: 'numberOfIssue',
    message: 'How many issues do you have today?',
  })
  const hr = Array.from({length: 50}, () => '-').join('')
  const subIssues = Array.from({length: 3}, () => SUB_ISSUE_TEMPLATE).join('')
  const issues = Array.from(
    {length: numberOfIssue},
    () => ISSUE_TEMPLATE + subIssues,
  ).join(`\n// ${hr}\n`)

  pbcopy(issues)
}

makeIssues()
