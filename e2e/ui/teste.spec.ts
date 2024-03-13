import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.dev.web.nextar.com.br/login');
  
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('andre.lucio+99@nextar.com.br');
  await page.getByLabel('Senha').fill('nextarQA0033');
  await page.getByRole('button', { name: 'ENTRAR' }).click();
  await page.getByRole('button', { name: 'Entendi' }).click();
  
  //   await page.getByRole('button', { name: 'Nova Venda' }).click();/*  */

  await page.locator('[data-cy="new-sale-button"]').click();

  await page.getByRole('button', { name: '' }).click();
  await page.getByText('DR. Product ANAQKMMTLM').click();
 
});