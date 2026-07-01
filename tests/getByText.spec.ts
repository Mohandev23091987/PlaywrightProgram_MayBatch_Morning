

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

// let submitlocatorele = page.getByText('submit form');
// console.log(submitlocatorele);
// let isfound = await submitlocatorele.isVisible();
// console.log(isfound);

let randomString = Math.random().toString(36).substring(3,20);

console.log(randomString);

await page.getByLabel('Email Address:').scrollIntoViewIfNeeded()
await page.getByLabel('Email Address:').fill('ravi')

console.log(await page.getByLabel('Email Address:').inputValue())

// await page.getByLabel('Email Address:').press('Control+A')

// await page.getByRole('link',{name:'Download Files'}).scrollIntoViewIfNeeded()

console.log(page.locator('#email'))

//focus 
//keyboard actions

console.log(await page.locator("//*[@id='title-locators']//li").allTextContents())

let alltabs =  await page.locator("//*[@id='crosscol']//a").allTextContents();

//expects = home 
alltabs.includes('Home')

if (await page.locator("//*[@id='crosscol']//a").first().textContent() === 'Home')
{

    console.log('first tab is home')
}






})

