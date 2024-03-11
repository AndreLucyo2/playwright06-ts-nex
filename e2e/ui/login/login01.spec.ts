import { test, expect } from '@playwright/test';

test.describe('Primeiros testes', () => {

    test('Teste se o usuário faz logim com sucesso ', async ({ page }) => {

        await page.goto('https://www.saucedemo.com'); //site demos para testes
        
        //Valida o titulo da pagina
        await expect(await page.title()).toBe('Swag Labs');

        await page.locator('[data-test=username]').fill('standard_user');
        await page.locator('[data-test=password]').fill('secret_sauce');

        await page.locator('[data-test=login-button]').click();

        await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

        const productTitle = await page.locator('.header_secondary_container > span');

        await expect(productTitle).toHaveText('Products');

    });

    test('Testa caso o usuário informar os dados errados ', async ({ page }) => {

        await page.goto('https://www.saucedemo.com'); //site demos para testes

        await page.locator('[data-test=username]').fill('standard_user');
        await page.locator('[data-test=password]').fill('senha errada');
        await page.locator('[data-test=login-button]').click();

        const textError = await page.getByText('Epic sadface: Username and password do not match any user in this service');
        await expect(textError).toBeVisible();
    });


});