import { test } from '@playwright/test';

test.beforeEach(async({page})=>{
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();

})

test('Locator-Rules',async ({page})=>{
 // by Tag Name 
  page.locator('input');

  //by id
  page.locator('#inputEmail1');

  //by class-value
  page.locator('.shape-rectangle');
  //by full class
  page.locator('class="input-full-width size-medium status-basic shape-rectangle nb-transition"')

 // by attribute
 //await page.locator('placeholder="Email"').click();
 //await page.locator('placeholder="Email"').first().click();
 page.locator('placeholder="Email"')
 //DIFFERENT SELECTORS
 page.locator('input[placeholder="Email"][nbinput]');
 //or
 page.locator('input[placeholder="Email1"].[size-medium]');


 //by partial TExt
 page.locator(':text("Using")');

  //by Exact Match TExt
  page.locator(':text("Using the Grid")');
  
  })



