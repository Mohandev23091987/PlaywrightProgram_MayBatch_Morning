import {expect,test} from '@playwright/test'

test("css selector",async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");



await page.locator('//input[@id="sunday"]').click();


//locator


console.log(page.frames().length)

})