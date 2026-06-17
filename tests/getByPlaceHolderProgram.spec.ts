

//getByPlaceholder()  => palceholder
// input fileds or textboxes 
//it should have helper text or place holder

//

import {expect,test} from '@playwright/test'

test("GetRoleProgram",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await page.getByPlaceholder('Enter your full name').fill('Mohan')

 





})