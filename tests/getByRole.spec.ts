//getByRole  
// button, link, textbox, checkbox,radio,heading, combobox,list,row,cell
//Role and name
//Role => type of an element 
//name => visible text or accessible name 

// <button id='123'>loginbutton to click </button>

//await page.getByRole(role,{name:'loginbutton'}).click();

// <a href="/home">Home</a>

//await page.getByRole('link',{name:'Home'}).click()

//<input type='text'>

// await page.getByRole('textbox').fill("Ravi").fill("Ravi")

// button - button, a - link, input - textbox, textarea - textbox, radio- radio
//h1-h6 - heading
//li - list item 


import {expect,test} from '@playwright/test'

test("GetRoleProgram",async({page})=>{


  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await expect(page.getByRole('heading',{name:'PlaywrightPractice'})).toBeVisible();

//<button role="button">Primary Action</button>

await page.getByRole('button',{name:'Primary'}).click();

//<input type="text" id="username" role="textbox">

await page.getByRole('textbox',{name:'Username'}).fill("Ravi")



})


