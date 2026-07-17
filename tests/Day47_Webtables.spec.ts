import {test,expect} from '@playwright/test'

test('handling webtables',async({page})=>{

 await page.goto('https://testautomationpractice.blogspot.com/')

 //identifying webtable
 let table =  page.locator('table[name="BookTable"]');

 //getting rows 

 let rows = table.locator('tr');  // multiple rows 

 let rowscount =await rows.count()
console.log('number of rows',await rows.count())

//get columns
let columns = rows.locator('th')
console.log('number of columns',await columns.count())

//getting values from particular cell
console.log(await rows.nth(2).locator('td').nth(2).innerText())

//entire row text 
await rows.nth(4).innerText()
//print cell data 
await rows.nth(4).locator('td').nth(1).innerText()

for(let i=0;i< await rows.count() ;i++){
    console.log(await rows.nth(i).innerText())
}

//print only book names

console.log('booknames')
console.log('==========')

//booknames
for(let i=1;i< await rows.count() ;i++){
    console.log(await rows.nth(i).locator('td').nth(0).innerText())
}

console.log('printing headers')
console.log(await rows.locator('th').allInnerTexts())


//console.log(await page.locator('table[name="BookTable"] tr th').allInnerTexts())

//rows.locator('th').allTextContents()

//print amit books
console.log(await rows.filter({hasText:'Amit'}).locator('td').nth(0).allInnerTexts())


})