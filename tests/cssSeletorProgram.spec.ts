import {expect,test} from '@playwright/test'

test("css selector",async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

//tag selector 
let webelementText = await page.locator('h1[class="title"]').textContent();
console.log(webelementText)

//id selector  #name

await page.locator('#name').fill("Ram");
console.log(await page.locator('#name').inputValue())

//handling multiple locators 

await page.locator('input').count()

let palceholderValue =await page.locator('input').first().getAttribute('placeholder')

console.log(palceholderValue)


//[attribute=value]



await page.locator('[placeholder="Enter Phone"]').fill('67868767')



})