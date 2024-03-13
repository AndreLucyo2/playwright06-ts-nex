
// //ver video https://youtu.be/QJL6uV7z-8I
// //esta função sera executada toda vez que o playwright executar 

 import { Browser, Page, chromium } from "@playwright/test";

 async function globalSetup() {
     const browser: Browser = await chromium.launch({ headless: false });
     const context = await browser.newContext();
     const page: Page = await context.newPage();

     //Acessar a pagina:
     await page.goto('https://www.dev.web.nextar.com.br/login');
     await page.getByLabel('E-mail').fill('andre.lucio+7008@nextar.com.br');
     await page.getByLabel('Senha').fill('12345678');
     await page.getByRole('button', { name: 'ENTRAR' }).click();

     await page.context().storageState({ path: "./storage-state.json" });

     console.log("Fez login!")

     await browser.close();

 }
 export default globalSetup;