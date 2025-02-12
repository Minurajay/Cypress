# Cypress with JavaScript
## Project Overview
This project demonstrates various **Cypress** automation techniques using **JavaScript**. It covers essential automation concepts including element locators, UI interactions, API testing with intercepts, and assertions. Each topic is implemented in a separate script, showcasing Cypress's powerful features and built-in test runner.

### The scripts are designed to showcase:
- **Selectors & Commands:** Using Cypress's chainable commands and selector strategies.
- **Auto-waiting:** Leveraging Cypress's built-in automatic waiting mechanisms.
- **API Testing:** Performing API tests using cy.request and intercepting network calls.
- **UI Interactions:** Handling complex UI patterns including alerts, dropdowns, and forms.
- **Assertions:** Utilizing Cypress's built-in assertion library.
- **Network Interception:** Managing and testing network requests with cy.intercept.

Each script focuses on specific Cypress functionality and demonstrates automation across different web applications.

## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/cypress-js-project.git
cd cypress-js-project
```

2. Install dependencies:
```bash
npm init -y
npm install cypress --save-dev
```

3. Open Cypress:
```bash
npx cypress open
```

## Running Tests
Run all tests headlessly:
```bash
npx cypress run
```

Run specific test file:
```bash
npx cypress run --spec "cypress/e2e/test-file.cy.js"
```

Open Cypress Test Runner:
```bash
npx cypress open
```

## Best Practices
1. Use Cypress commands over raw JavaScript
2. Leverage automatic waiting
3. Use data-cy attributes for selectors
4. Avoid sharing state between tests
5. Use intercepts for network requests
6. Implement proper error handling

## Debugging
- Use Cypress Test Runner for visual debugging
- Use cy.log() for logging
- Use .debug() command to pause test execution
- Use Chrome DevTools in conjunction with Test Runner
