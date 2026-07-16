import {test,chromium,expect} from '@playwright/test'

test('Handling a new tab',async ()=>{

  let browser = await chromium.launch();
  let context = await browser.newContext();
  let page    = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/')

 let newPage = await Promise.all([
    page.getByRole('button',{name:'New Tab'}).click(),
    context.waitForEvent('page')  //newpage
     // void
])

await newPage[1].waitForLoadState()
// [void,page]
// like selenium no need to switch 
//performing actions on oldpage
console.log(await page.title())
//performing actions on newPage
console.log(await newPage[1].title())
await expect(newPage[1].getByRole('heading',{name:'SDET-QA Blog'})).toBeVisible()

//old page
await page.bringToFront() 
await page.getByPlaceholder('Enter Name').fill('Ravi')


})

test('Handling a new tab with context pages',async ()=>{

  let browser = await chromium.launch();
  let context = await browser.newContext();
  let page    = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/')

 await Promise.all([
    context.waitForEvent('page'),  
    page.getByRole('button',{name:'New Tab'}).click()
])

   let pages = context.pages();
   console.log(pages.length)

  await pages[0].goto('https://www.amazon.in/')
  await pages[1].goto('https://www.flipkart.com/')
  



  //print all pages titles

  for( let tab of pages){
    console.log(await tab.title())
    console.log('=============')
  }




//   browser.close()
//   context.close()
//   pages[0].close()
// pages[1].close()

// // like selenium no need to switch 
// //performing actions on oldpage
// console.log(await page.title())


// //performing actions on newPage
// console.log(await newPage[0].title())
// await expect(newPage[0].getByRole('heading',{name:'SDET-QA Blog'})).toBeVisible()

// //old page
// await page.bringToFront() 
// await page.getByPlaceholder('Enter Name').fill('Ravi')


})


test('Using default fixtures',async ({context,page})=>{

//   let browser = await chromium.launch();
//   let context = await browser.newContext();
//   let page    = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/')

 let newPage = await Promise.all([
    context.waitForEvent('page'),  
    page.getByRole('button',{name:'New Tab'}).click()
])

// like selenium no need to switch 
//performing actions on oldpage
console.log(await page.title())


//performing actions on newPage
console.log(await newPage[0].title())
await expect(newPage[0].getByRole('heading',{name:'SDET-QA Blog'})).toBeVisible()

//old page
await page.bringToFront() 
await page.getByPlaceholder('Enter Name').fill('Ravi')


})


test('Second Program using default fixtures ',async ({context,page})=>{

//   let browser = await chromium.launch();
//   let context = await browser.newContext();
//   let page    = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/')

 await Promise.all([
    context.waitForEvent('page'),  
    page.getByRole('button',{name:'New Tab'}).click()
])

   let pages = context.pages();
   console.log(pages.length)

  await pages[0].goto('https://www.amazon.in/')
  await pages[1].goto('https://www.flipkart.com/')
  //print all pages titles
  for( let tab of pages){
    console.log(await tab.title())
    console.log('=============')
  }

})


test('Handling new browser window ',async ({context,page})=>{

//   let browser = await chromium.launch();
//   let context = await browser.newContext();
//   let page    = await context.newPage();

// new tab will arise from context 

// new window popup will arise from page

  await page.goto('https://testautomationpractice.blogspot.com/')

 let allPages = await Promise.all([
    page.waitForEvent('popup'),  
    page.getByRole('button',{name:'Popup Windows'}).click()
])

await allPages[0].waitForLoadState()

let pages = context.pages()

console.log(pages.length)

//print all pages titles
  for( let tab of pages){
    console.log(await tab.title())
    console.log('=============')
  }
})

/*

choosefile element 
setInputFiles('single file')

//filechooser

*/

test('File upload ',async ({page})=>{

// find an element which takes input as file

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('testdata/resume.txt')

    await page.locator('#file-submit').click()

    await expect(page.getByRole('heading',{name:'File Uploaded'})).toBeVisible()
    await expect(page.locator('#uploaded-files')).toHaveText('resume.txt')

})


test('Multiple Files upload ',async ({page})=>{

// find an element which takes input as file

    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');


    await page.locator('input[type="file"]').setInputFiles([
     'testdata/resume.txt',
     'testdata/sample.txt',
     'testdata/sample2.txt'
    ])


})


test('without using promise.all',async ({context,page})=>{

//   let browser = await chromium.launch();
//   let context = await browser.newContext();
//   let page    = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/')


  let newPagePromise = page.waitForEvent('popup')
  await page.getByRole('button',{name:'New Tab'}).click()

  let newPage = await newPagePromise
  newPage.waitForLoadState()
  console.log(await newPage.title())
})


/*

Browser 
    context1.close()
       page
    
    context2.close()
       page




*/








