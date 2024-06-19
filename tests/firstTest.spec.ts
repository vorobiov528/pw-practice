import { test } from '@playwright/test';

test.beforeEach(async({page})=>{
  await page.goto('http://localhost:4200/');
})

test.describe('suite1',()=>{
  test.beforeEach(async({page})=>{
   await page.getByText('Forms').click();
  })

  test('click on Layouts ', async ({ page }) => {
   await page.getByText('Form Layouts').click();
  });

  test('Navigate to Datepicker', async ({ page }) => {
    await page.getByText('Datepicker').click();
  });

})
