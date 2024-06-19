import { test } from '@playwright/test';

test.beforeEach(async({page})=>{
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();

})
// input field- page.getByRole('textbox')
// page.getByRole('button',{name:'Sign In'})
//lable - page.getByLable('Email)
//placeholder - page.getByPlaceHolder('Email)
// text - page.getBytext('SignIn')

test('User-Facing-Locator',async ({page})=>{

 await page.getByRole('textbox',{name: "Email"}).first().click();
 await page.getByRole('button',{name: "Sign in"}).first().click();

 await page.getByLabel('Email').first().click();

 await page.getByPlaceholder('Jane Doe').first().click();

 await page.getByText('Using the Grid').first().click();

 await page.getByTitle('Using the Grid').first().click();


 await page.getByTestId('Sign').first().click();





})