// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache 2.0':
            return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
            break;
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
            break;
        case 'GNU General Public':
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
            break;
        default: 
            return ''
            break;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0'
        break;
    case 'MIT':
        return 'https://opensource.org/licenses/MIT'
        break;
    case 'GNU General Public':
        return 'https://www.gnu.org/licenses/gpl-3.0'
        break;
    default: 
        return ''
        break;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache 2.0':
        return 'This project is covered under Apache License 2.0'
        break;
    case 'MIT':
        return 'This project is covered under MIT license.'
        break;
    case 'GNU General Public':
        return 'This project is covered under GNU General Public License v3.0'
        break;
    default: 
        return ''
        break;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Table of Contents:\n
  1. [License](#License)\n
  2. [Description](#Description)\n
  3. [Installation](#Installation)\n
  4. [Usage](#Usage)\n
  5. [Contributing](#Contributing)\n
  6. [Tests](#Tests)\n\n
  ## License\n
  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}\n
  ${renderLicenseSection(data.license)}\n
  ## Description\n
  ${data.description} ${data.description1} ${data.description2} ${data.description3} ${data.description4}\n
  ## Installation\n
  ${data.installation}\n
  ## Usage\n
  ${data.usage}\n
  ## Contributing\n
  ${data.contributing}\n
  ## Tests\n
  ${data.tests}\n
  ## Questions\n
  My github:
  https://github.com/${data.username}
  My Email:
  ${data.email}`;
}

module.exports = generateMarkdown;
