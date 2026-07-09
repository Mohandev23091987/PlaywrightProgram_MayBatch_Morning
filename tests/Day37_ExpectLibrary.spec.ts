



import {expect,test} from '@playwright/test'



test("@login @P1 @Regression Expect Library methods",async({page})=>{

await page.goto("https://practice-automation.com/form-fields/");

/*
These are assertions to verify whether application reached to expected state or not 
expected value vs actual value 

1)Locator Assertions => which is applied on Locators 
2)Page assertions => which is applied on page 
3)Generic value assertions 
4)Negative assertions
5)APi assertions => which is applied on api responses 
*/

//Locator assertion 
//toBeVisible  => element is visible or not 
await expect(page.locator('#name-input')).toBeVisible({timeout:10000});
//toBeHidden => wait until hidden or removed 
await expect(page.locator('.spinner')).toBeHidden();

//toBeEnabled 
await expect(page.locator('#submit-btn')).toBeEnabled();

//toBeDisabled
//await expect(page.locator('#submit-btn')).toBeDisabled();

//toBeChecked => checks particular checkbox or radio button is selected 
await page.getByRole('checkbox',{name:'Water'}).check();
await expect(page.getByRole('checkbox',{name:'Water'})).toBeChecked();


//toHaveText > checks for extact text

//single => id, name, text , placeholder 
//group of element => class ,type, role ,tagname

await expect(page.locator('#submit-btn')).toHaveText('Submit');

//toContainText => checks for part of the text 
await expect(page.locator('#submit-btn')).toContainText('Submi');

//toBeEditable => textbox is editable or not 
await expect(page.getByPlaceholder('Enter message here')).toBeEditable();


//toBeEmpty()
await expect(page.getByPlaceholder('Enter message here')).toBeEmpty();


//toBeFocused()
await page.getByPlaceholder('Enter message here').focus();
await expect(page.getByPlaceholder('Enter message here')).toBeFocused();


//toHaveValue() => verify the value inside an input element is there
await page.getByPlaceholder('Enter message here').fill('Ram is a good boy')
await expect(page.getByPlaceholder('Enter message here')).toHaveValue('Ram is a good boy');

//toHaveAttribute 
//toHaveClass()
//toHaveCount
//toHaveID
//toHaveRole


//locator assertions => await expect(yourlocator).method()
//Page assertions => it verifies state of your webpage 

//syntax  await expect(page).method();  //  5seconds

// 1)toHaveUrl => exact url 

await expect(page).toHaveURL('https://practice-automation.com/form-fields/');

//   /practice-automation.com/



await expect(page).toHaveURL(/practice-automation/);

// 2)toHaveTitle


await expect(page).toHaveTitle(/Practice Automation/);

// graph vaidation or page validation

//await expect(page).toHaveScreenshot('')

//generic value assertion //checking two values

let foundValue = await page.getByPlaceholder('Enter message here').isVisible();

expect(foundValue).toBeTruthy();
//toBeFalsy
//toBeNull()

let a;
expect(a).toBeUndefined();

a=50;

expect(a).toBe(50);  // ===

//toEqual() => to check objects 

let user = {
name:'Ram',
age:55
};

let user2 ={
    name:'Ram',
    age:55
}

expect(user).toEqual(user2);

//toContain => to check value is present in a string or array 

expect([5,7,10]).toContain(7);

expect(["Mohan","Playwright"]).toContain("Mohan");

expect("Rama is a good BOy").toContain('Rama');


a=100;

expect(a).toBeGreaterThan(70);

let str='12345';

expect(/^\d+$/.test(str)).toBeTruthy();



//API Assertions
//Negative Assertions

//Hard Assetions
//soft Assertions 

//Synchronization

// Running command line 
//analysis resutls


//Elements



//  expect(page/locator/value).method();

//palywrigh=> ok 

// catch the opou => get the text =>expect 


//running through command lines 

//modular programming + data driven 
//





})


