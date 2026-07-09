import {expect,test} from '@playwright/test'

test("handling elements @P1 @Login",async({page,browser,context})=>{


await page.goto("https://practice-automation.com/form-fields/");

await page.getByLabel('Name').first().fill('Ram')
await page.getByLabel('Name',{exact:true}).press('Tab')

await page.getByLabel('Password',{exact:true}).fill('mohan')
await page.getByLabel('Password',{exact:true}).clear()

await page.getByLabel('Password',{exact:true}).fill('Laxman')
console.log(await page.getByLabel('Password',{exact:true}).inputValue())

await page.getByLabel('Password',{exact:true}).waitFor({
    state:'visible',
    timeout:10000
})