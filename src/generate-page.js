const licenseArr = [
    {
        name: 'GNU AGPLv3',
        badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]',
        url: 'https://www.gnu.org/licenses/agpl-3.0'
    },
    {
        name: 'GNU GPLv3',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
        url: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
        name: 'GNU LGPLv3',
        badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]',
        url: 'https://www.gnu.org/licenses/lgpl-3.0'
    },
    {
        name: 'MPL',
        badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]',
        url: 'https://opensource.org/licenses/MPL-2.0'
    },
    {
        name: 'Apache',
        badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
        url: 'https://opensource.org/licenses/MIT'
    },
    {
        name: 'MIT',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
        url: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
        name: 'The Unlicense',
        badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]',
        url: 'http://unlicense.org/'
    }
]

let badge = "";
let url = "";

const checkArray = (array, data) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === data) {
            badge = array[i].badge;
            url = array[i].url;
            return "";
        }
    }
}

const generatePage = pageData => {
checkArray(licenseArr, pageData.license)

    return `
# ${pageData.title}

## Description

${badge}(${url})

${pageData.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${pageData.install}

## Usage 

${pageData.usage}

## Contributing

${pageData.contribute}

## Tests

${pageData.tests}

## License

Code released under the [${pageData.license} License](${url})

****

## Questions
For further questions I can be reached at:

GitHub:[${pageData.github}](https://github.com/${pageData.github})

Email: ${pageData.email}

Further Instructions: 

${pageData.instructions}
    
    `;
};

module.exports = generatePage;