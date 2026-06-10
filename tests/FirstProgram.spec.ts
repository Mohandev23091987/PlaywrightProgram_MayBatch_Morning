import {expect,test,chromium} from '@playwright/test'


test("First Program",async()=>{

    //creating your browser
   let browser = await chromium.launch({headless:false});

   // creating browser context 
   let browserContext =await browser.newContext();

   //creating a page 
  let page = await browserContext.newPage();

  await page.goto("https://playwright.dev/");

  console.log(await page.title());

  await page.close();


});


