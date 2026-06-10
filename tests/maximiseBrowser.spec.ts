
import {test,expect, chromium}  from '@playwright/test';

test("First test case",async({page})=>{

// let browser =await chromium.launch({
//     headless: false,
//     args: ['--start-maximized']
//   });
// let browserContext =await browser.newContext({
//     viewport: null,
//     deviceScaleFactor: undefined
//   });
// let page= await browserContext.newPage();
await page.goto("https://playwright.dev/");
// await page.setViewportSize({
//     width: 1920,
//     height: 1080
//   });
await page.title()
console.log("testing");
console.log("testing");


})

// test("second test case",()=>{

// })

// test("Third test case",()=>{

// })

