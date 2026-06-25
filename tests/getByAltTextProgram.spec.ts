

//actions 
//information methods 
//statemethods 

//getByAltText => idenfit images 
// maps to alt attribute 
//img tag


//extact match
//partial match 
//regular expression 
//case sensitive
//extract true 

import {expect,test} from '@playwright/test'

test("GetRoleProgram",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

let imageLocator = page.getByAltText('logo imajkj123');

//methods
//page class 
console.log(await imageLocator.isVisible()); // statemethod
console.log(await imageLocator.getAttribute('srx'))  // information method
await page.waitForTimeout(5000);
//<img alt="logo image" src="https://playwright.dev/img/playwright-logo.svg">

//button
//checkbox 
//dropdown
//scroll
// 


})


