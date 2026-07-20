import {test,expect} from '@playwright/test'

test('Validate entires on a page ', async ({page})=>{

await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html',{waitUntil:'load'})

let entriesDropDown = page.locator('#dt-length-0')

        await entriesDropDown.selectOption({label:'50'})

//getting all rows 
let allRowsSelector =await page.locator('#example tbody tr') // 50rows select
await expect(allRowsSelector).toHaveCount(50)

//arrays concept
let allRowsSelectorinArray =await page.locator('#example tbody tr').all()
//console.log(allRowsSelectorinArray)
await expect(allRowsSelectorinArray.length).toBe(50)

})

test('search a person name and validate its details', async ({page})=>{

await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html',{waitUntil:'load'})

await page.getByLabel('Search:').fill('Yuri Berry')

let arrayOfrows = await page.locator('#example tbody tr').all()
await expect(arrayOfrows.length).toBe(1)

let office =  await arrayOfrows[0].locator('td').nth(2).innerText()
let startdate = await arrayOfrows[0].locator('td').nth(4).innerText()
let salary =  await arrayOfrows[0].locator('td').nth(5).innerText()

console.log(`person details are : office :${office}, startdate:${startdate} and person salary is ${salary}`)

await expect(office).toBe('New York')

})

test('search a person name and validate its details of mutliple rows', async ({page})=>{

await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html',{waitUntil:'load'})

await page.getByLabel('Search:').fill('gavin')

let arrayOfrows = await page.locator('#example tbody tr').all()
await expect(arrayOfrows.length).toBe(2)

for(let row of arrayOfrows){

    // console.log(await row.innerText())

//     let salary = await row.locator('td').nth(5).innerText();

//    await expect(salary).toBeGreaterThan(5000)

let personname =  await row.locator('td').nth(0).innerText()
let office =  await row.locator('td').nth(2).innerText()
let startdate = await row.locator('td').nth(4).innerText()
let salary =  await row.locator('td').nth(5).innerText()

console.log(` ${personname} person details are : office :${office}, startdate:${startdate} and person salary is ${salary}`)
  
//validations

}


test('pagination program', async ({page})=>{

await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html',{waitUntil:'load'})

let personame = 'Michael Bruce'
let flag = false;
   while(await page.getByRole('button',{name:'Next'}).isEnabled()){
        let rows = await page.locator('#example tbody tr').all();
        for(let row of rows){
            if(await row.locator('td').nth(0).innerText()=='personame'){
            //validations of a person
            flag=true;
            }
        }   
        if(flag) 
            break
        await page.getByRole('button',{name:'Next'}).click()
    }

})

test('filtering pagination program', async ({page})=>{

await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html',{waitUntil:'load'})

let personame = 'Michael Bruce'
let flag = false;
   while(await page.getByRole('button',{name:'Next'}).isEnabled()){

/*
 locator1  => this row => Michael Bruce   20  2000   
 locator2 =>  this row => Michael Bruce   30  3000

 case1:
  await page.locator('#example tbody tr',{hasText:'Michael Bruce'}).all()
   [locator1,locator2]


   case2:
    await page.locator('#example tbody tr',{hasText:'Michael Bruce'})
 locator => locator

filtering:
 mohan           20  2000 
 Michael Bruce   30  3000

  let allrows = await page.locator('#example tbody tr').all()
   [locator1,locator2]

allrows[0].locator(td).nth(2)



//row td 


 case3:
*/



        let row = await page.locator('#example tbody tr',{hasText:'Michael Bruce'}).all();
        // for(let row of rows){
        //     if(await row.locator('td').nth(0).innerText()=='personame'){
        //     //validations of a person
        //     flag=true;
        //     }
        // }   
        if(row.length === 1) {
            //Validations of a michel bruce
            break
        }
            
        await page.getByRole('button',{name:'Next'}).click()
    }

})











})