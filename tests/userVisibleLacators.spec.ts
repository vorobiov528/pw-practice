import { expect, test } from '@playwright/test';

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

// locating Child Element
test('Child-Element',async ({page})=>{
    await page.getByRole('textbox',{name: "Email"}).first().click();
    page.locator('div input');
    page.locator('div').getByRole('textbox')
    page.locator('nb-radio-group').locator('nb-radio').nth(0)
    page.locator('nb-radio-group').locator('nb-radio').nth(1)
})

//Locating Parent element
test('Parent-Element',async ({page})=>{   
  await page.locator('nb-card',{hasText:"Using the Grid"}). getByRole('textbox',{name: "Email"}).click();
  await page.locator('nb-card',{has: page.locator("Email1")}).getByRole('textbox',{name: "Email"}).click();

  await page.locator('nb-card').filter({hasText:"Basic Form"}).getByRole('textbox',{name: "Email"}).click();
  await page.locator('nb-card').filter({has:page.locator("Basic Form")}).getByRole('textbox',{name: "Email"}).click();
  await page.locator('nb-card').filter({has:page.locator("check-box")}).filter({hasText:"Sign in"}).getByRole('textbox',{name: "Email"}).click();
// Reusible locators
test('Reusible-Locator',async ({page})=>{   
    const basicForm = page.locator('nb-card').filter({hasText:'Basic form'});
    const emailField = basicForm.getByRole('textbox',{name: "Email"});

    await emailField.fill('test@test.co');
    await basicForm.getByRole('textbox',{name: "Password"}).fill('Welcome123');
    await basicForm.locator('nb-checkbox').click();
    await basicForm.getByRole('button').click()

  await expect(emailField).toHaveValue('test@test.com')
  })

  test('Extracting-value-Text',async ({page})=>{   
      //ssingle test value
    const basicForm = page.locator('nb-card').filter({hasText:'Basic form'});
    const buttonText = await basicForm.locator('button').textContent;
    expect (buttonText).toEqual('Submit')

    //All text value
    const allRadioBtnLables = await page.locator('nb-radio').allTextContents();
    expect (allRadioBtnLables).toContain('Option1')
    
    //input value
  const emailField = basicForm.getByRole('textbox',{name:"Email"});
  await emailField.fill('test@test.com');
  const emailValue = await emailField.inputValue();
  expect (emailValue).toEqual('test@test.com')

  //Placeholder Text
  const placeHolderValue = await emailField.getAttribute('placeholder')
  expect(placeHolderValue).toEqual('Email')
  })
})