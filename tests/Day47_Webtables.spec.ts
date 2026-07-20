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

//7
//{hasText:'Learn Java'}  => 1
table.locator('tbody tr',{hasText:'Learn Java'}).locator('td').nth(1);

})

test('Deepdive into Webtables',async({page})=>{

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

//7
//{hasText:'Learn Java'}  => 1
console.log('filetering concept')
console.log(await table.locator('tbody tr',{hasText:'Learn Java'}).locator('td').nth(1).innerText())

//24
console.log('printing the row by using all concept')
let arryofLocators = await table.locator('tbody tr',{hasText:'Javascript'}).all()
console.log(await arryofLocators[0].innerText())

//books of any author 
console.log('printing all author books')
let authorRows = await table.locator('tbody tr',{hasText:'Mukesh'}).all();

for(let row of authorRows){
   let bookname = await row.locator('td').nth(0).innerText()
    let bookprice = await row.locator('td').nth(3).innerText()
    console.log( `${bookname} price is ${bookprice}`)

}

// printing all column names

let allcolumns =await page.locator('#taskTable').locator('thead th').allInnerTexts()

await expect(allcolumns).toContain('Name')
await expect(allcolumns.includes('Name')).toBeTruthy()

console.log('printing names under Dynamic Web Table')
let allrowsProducttable = await page.locator('#taskTable').locator('tbody tr').all()
for(let row of allrowsProducttable){

    console.log(await row.locator('td').nth(0).innerText())
}


await page.locator('#productTable').locator('tbody tr',{hasText:'	Smartphone'}) .getByRole('checkbox').click()

let priceofProduct = await page.locator('#productTable>tbody tr',{hasText:'Smartwatch'}).locator('td').nth(2).innerText()

console.log(priceofProduct)

//============================================
console.log("printing through array ")

let alloptionElements = await page.locator('#country option').all();

for(let option of alloptionElements){

    console.log(await option.innerText())
}


})


