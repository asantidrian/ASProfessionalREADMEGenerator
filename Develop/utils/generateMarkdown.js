// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  if (licenseBadge !== "None") {
    return ` ![badge](https://img.shields.io/badge/license-${licenseBadge}-brightgreen)`
  } else { return "No Lincense" }
}

// Function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contribution, test,
  username, email, repository }) {

  return `# ${title}

  ${renderLicenseBadge(license)}
  # Description 
  ${description}   

  ## Table of Contents   
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Contribution](#contribution)  
  - [Test](#test)  
  - [License](#License)
  - [Questions](#Questions)
  
  # Installation  
  ${installation}  
  
  # Usage  
  ${usage}  
  
  # Contribution   
  ${contribution}

  # Test   
  ${test}  
  
  # License & Contact
  ${renderLicenseBadge(license)}
   
  My GitHub link: [${username}](https://github.com/${username})  
   
  If you have any question, email me here: ${email}      
  My repo link: ${repository}    
`;
}

module.exports = generateMarkdown;


