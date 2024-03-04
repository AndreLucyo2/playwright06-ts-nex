import { test, expect, Browser, chromium, Page } from '@playwright/test';

test.describe('Estudo: Abrindo o browser, criando a page ', () => {

    test('Usuário faz logim com sucesso ', async () => {

        //Arrange:
        //Definindo o navegador e a criando a pagina: posso manipular individialmente o comportamento do navegador
        const browser: Browser = await chromium.launch({
            headless: true,
            channel: 'chrome'
        });
        //Cria uma nova pagina no navegador:
        const page: Page = await browser.newPage();
        //Visita a pagina:
        await page.goto('https://www.saucedemo.com');        


        //Actions
        //Preenche os campos e clica em login:
        await page.locator('[data-test=username]').fill('standard_user');
        await page.locator('[data-test=password]').fill('secret_sauce');
        await page.locator('[data-test=login-button]').click();
        

        //Asserts:
        await expect(await page.title()).toBe('Swag Labs');
        await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
        const productTitle = await page.locator('.header_secondary_container > span');
        await expect(productTitle).toHaveText('Products');

    });


    test('Usuário faz logim com sucesso', async ({ page }) => {

        //Arrange:
        //Visita a pagina:
        await page.goto('https://www.saucedemo.com');        

        //Actions
        //Preenche os campos e clica em login:
        await page.locator('[data-test=username]').fill('standard_user');
        await page.locator('[data-test=password]').fill('secret_sauce');
        await page.locator('[data-test=login-button]').click();
        

        //Asserts:
        await expect(await page.title()).toBe('Swag Labs');
        await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
        const productTitle = await page.locator('.header_secondary_container > span');
        await expect(productTitle).toHaveText('Products');

    });


});