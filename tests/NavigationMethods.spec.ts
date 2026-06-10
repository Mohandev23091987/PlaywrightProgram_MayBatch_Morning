import {expect,test} from '@playwright/test'

test("second",async({page})=>{

    // goto(url,options)
  await page.goto("https://playwright.dev/");
  console.log(await page.title());

  await page.waitForTimeout(3000);
  await page.goto("https://www.amazon.in/")

  // await page.goback(options)
  await page.goBack();
  await page.waitForTimeout(3000);
  await page.goForward();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);

//page information methods

// page.url() => it will retrun current url of page
  console.log( page.url());

let tile = await page.title();
console.log(tile);
let size =  page.viewportSize();
 console.log(size?.width)
  console.log(size?.height)
  console.log(await page.content());







})


