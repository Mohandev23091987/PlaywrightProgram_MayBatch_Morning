



import {expect,test} from '@playwright/test'

test("@P1 @Regression Expect Library methods",async({page})=>{

    test.setTimeout(120000);

    await page.goto("https://practice-automation.com/form-fields/");
/*
negative assertions 
visible => not visible 


await expect(locator).not.method();
*/
//not visible 
await expect(page.locator('.spinner')).not.toBeVisible()
await expect(page.locator("//li[text()='Selenium']")).toBeVisible({
    timeout:30000
})
await expect(page.locator("//li[text()='Python']")).not.toBeVisible()

//.error
//not.attached()


await expect(page.locator('.error')).toHaveCount(0);
await expect(page.locator('.error')).not.toBeAttached();

//not.toBeEnabled => buttons
//await expect(page.locator('#submit-btn')).not.toBeEnabled();

//not.toBeChecked() => checkboxes 
await expect(page.getByRole('checkbox',{name:'Water'})).not.toBeChecked();

//not.toBeEditable()  => texboxes 
//not.beFocused() => textboxes 

//checking text => elements  // 5 seconds 
await expect(page.locator("//label[contains(text(),'favorite')]").first()).not.toHaveText('India')

//no.toHaveValue() =>textboxes 


//doing negative assertison in page locators 
await expect(page).not.toHaveTitle('form-fields');


// not.toEqual
expect(12).not.toEqual(15);

//api assertions

// await expect(page).not.method()
// await expect(page).method()


//await expect(locator).method()
//await expect(locator).not.method()

/*Hard Assertions

1)if assertion fails => execution is going stop immediately 
10 lines => assertion failed at 2nd line
2)for  critical flows or vaidations we use hard assertions

====================================

2)Soft Assertions

=> when your assertion failed execution won't stop => collected 
=> it will go to next lines of code 

=> it will report all your failed assertions

Hard Assertion => expect(actutal).toBe(expected)
syntax:expect.soft(actual).toBe(expected)

Hard Assetion => expect(page).toHaveTitle('login')
Soft Assetion => expect.soft(page).toHaveTitle('login')

await expect.soft(page.getByRole('checkbox',{name:'Water'})).not.toBeChecked()

*/


expect.soft(12).toBe(15);

expect.soft(20).toBe(15);


//locators 


//actions

let locator1=  page.locator("//li[text()='Selenium123']");

//await locator1.click() // 30sec 

await expect(locator1).toBeVisible();   // 5sec


})


