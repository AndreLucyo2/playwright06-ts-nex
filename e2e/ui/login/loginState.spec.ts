import { test, expect } from '@playwright/test';


// https://www.youtube.com/watch?v=QJL6uV7z-8I



test('Acessar home ja logado', async ({ page }) => {
  
  await page.goto('https://www.dev.web.nextar.com.br/home/history');
  
  
  await page.getByRole('button', { name: 'Entendi' }).click();

  //await page.getByRole('button', { name: 'Nova Venda' }).click();/*  */

  //await page.locator('[data-cy="new-sale-button"]').click();

  await expect(page.locator('[data-cy=new-sale-button]')).toBeVisible();


 
});