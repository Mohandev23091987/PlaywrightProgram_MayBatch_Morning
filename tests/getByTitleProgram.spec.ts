

//actions 
//information methods 
//statemethods 

//getByTitle   
// maps to title attribute 



//extact match
//partial match 
//regular expression 
//case sensitive
//extract true 

import {expect,test} from '@playwright/test'

test("GetRoleProgram",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await page.getByTitle('Home').click();

//getByTestID locator => testid 
//more stable



console.log(await page.getByTestId('nav-home').isVisible())

console.log(await page.getByRole('alert').textContent())

})


