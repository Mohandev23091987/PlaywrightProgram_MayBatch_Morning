

// visible text displayed to the user 

// page.getByText(text)
//page.getByText(text,)

import {expect,test} from '@playwright/test'

test("GetRoleProgram",async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

let textlocator = page.getByText('important text that you might want to locate.');

// //locator state
// console.log(await textlocator.isVisible());

// await page.getByText('List item 1',{exact:true})


// console.log(await page.getByText('Locate elements').allTextContents())

//text 

console.log(await page.getByText('submit form').isVisible())

})

