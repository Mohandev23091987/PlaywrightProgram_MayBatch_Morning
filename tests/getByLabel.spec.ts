

// form controls 
//label 


//<label for="email">Email Address:</label>
//<input type="email" id="email" name="email">

//await page.getByLabel('Your Age:').fill("")



//<input type="email" id="email" name="email" aria-label='email'>

import {expect,test} from '@playwright/test'

test("GetRoleProgram ",{tag:['@login','@P1']},async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");


let emaillocator = page.getByLabel("Email Address:")
let pwdLocator =  page.getByLabel("Password:")
let ageLocator = page.getByLabel("Your Age:")



await emaillocator.fill('abc@xyz.com'); //lazy evulation
await pwdLocator.fill('123')
await ageLocator.fill("23");

})

test("",()=>{})
