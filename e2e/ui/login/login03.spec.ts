import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.dev.web.nextar.com.br';
//const BASE_API_URL = 'https://dev.api.web.nextar.com.br';

test('Teste gerado automaticamente', async ({ page }) => {

    await page.goto(BASE_URL + '/login');
    await page.getByLabel('E-mail').fill('andre.lucio+7008@nextar.com.br');
    await page.getByLabel('Senha').fill('12345678');
    await page.getByRole('button', { name: 'ENTRAR' }).click();
    await page.getByRole('button', { name: 'Entendi' }).click();

    await expect(page.locator('[data-cy=new-sale-button]')).toBeVisible();

    //Asserts:
    await page.getByRole('button', { name: 'Nova Venda' }).click();
    await expect(page).toHaveTitle(/Vendas/);
    await expect(page).toHaveTitle('Nex - Vendas');

});

test('Teste de login e acesso à página de vendas', async ({ page }) => {
    
    // Navega para a página de login
    await page.goto(BASE_URL + '/login');

    // Preenche o formulário de login
    await page.fill('[data-cy=login-mail-input]', 'andre.lucio+7008@nextar.com.br');
    await page.fill('[data-cy=login-pass-input]', '12345678');

    // Clica no botão de login
    const [response] = await Promise.all([
        page.waitForResponse(response => response.status() === 200),
        page.click('[data-cy=submit-login]'),
    ]);

    // Verifica se o login foi bem-sucedido
    expect(response.status()).toBe(200);

    // Obtém o JWT do cabeçalho de autorização
    const resp = response.headers()['authorization'];

    console.log(resp);

    // Verifica se o JWT existe
    //expect(jwt).toBeTruthy();

    // Navega para a página de vendas
    await page.goto('/home/history');

});
