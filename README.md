## Preparando o ambiente:
node:

    npm init -y

install playwright:

    npm init playwright@latest

Getting started with writing end-to-end tests with Playwright:  
Initializing project in '.'  
√ Do you want to use TypeScript or JavaScript? · TypeScript  
√ Where to put your end-to-end tests? · tests  
√ Add a GitHub Actions workflow? (y/N) · false  
√ Install Playwright browsers (can be done manually via 'npx playwright   install')? (Y/n) · true  


---

Inside that directory, you can run several commands:

### Runs the end-to-end tests.

    npx playwright test

### Starts the interactive UI mode.

    npx playwright test --ui

### Runs the tests only on Desktop Chrome.

    npx playwright test --project=chromium

### Runs the tests in a specific file.

    npx playwright test example

### Runs the tests in debug mode.

    npx playwright test --debug

### Auto generate tests with Codegen.

    npx playwright codegen

We suggest that you begin by typing:

    npx playwright test


Preserve authenticated state:
    npx playwright codegen github.com/microsoft/playwright --save-storage=auth.json
