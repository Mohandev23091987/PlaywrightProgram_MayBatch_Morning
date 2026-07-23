/*

Scrolling in Playwright:
==========================

Scrolling is required when:

An element is outside the visible browser area.
A dropdown contains many options.
A table is inside a scrollable container.
A page uses lazy loading or infinite scrolling.
More records appear only after reaching the bottom. 


1. Scroll the page to an element
Method 1: scrollIntoViewIfNeeded()


2. Scroll page using the mouse wheel  => we don't use this 

3. Scroll directly to the bottom and top
You can use JavaScript through page.evaluate()

4. Scroll a normal HTML dropdown - scrolling not required 

5. Scroll a custom dropdown

6. infinite scroll until elements loads 
*/

import { test, expect, Locator } from '@playwright/test'
//validation of pagination tables
test('1. Scroll the page to an element', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })
//locators 
let footerHeading_title = page.getByRole('heading',{name:'Footer Links'})
//actions 
await footerHeading_title.scrollIntoViewIfNeeded()
//validations
await expect(footerHeading_title).toBeVisible()
})


test('2. Scroll page using the mouse wheel ', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })

await page.mouse.wheel(0,1000)   //scrolling down 

await page.waitForTimeout(3000)

await page.mouse.wheel(0,1000) // scrolling down again with 1000 pixel 

await page.waitForTimeout(3000)

})

test('Scroll directly to the bottom and top', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })

// window.scrollTo(0,document.body.scrollHeight)  => scroll bottom of the page

// window.scrollTo(0,0)  => moves top of the page

//getting page hieght => document.body.scrollHeight
await page.evaluate(()=>{
    window.scrollTo(0, document.body.scrollHeight)
})
await page.waitForTimeout(2000)

await page.evaluate(()=>{
 window.scrollTo(0, 0)
})
await page.waitForTimeout(1000)

})

test('Scroll a normal HTML dropdown', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })

//select with options  => selectOption => will take care of scrolling
let country_Drpdown:Locator = page.locator('#country')

await country_Drpdown.selectOption({label:'India'})
await expect(country_Drpdown).toHaveValue('india')

})


test('Custom Dropdown Scrolling', async ({ page }) => {

    /*
    
    <ul>
       <li>
       <li>

    </ul>

    */

await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })

let dropdown= page.locator('#comboBox')
let option100 = page.getByText('Item 100',{exact:true})

//playwright => node.js => binary
//playwright => binary
await dropdown.click()
await option100.scrollIntoViewIfNeeded()
await option100.click()
})


test('Custom Dropdown Scrolling by using evaluate', async ({ page }) => {


await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })

let dropdown= page.locator('#comboBox')
let dropdownList_container = page.locator('#dropdown')
let option100 = page.getByText('Item 100',{exact:true})
await dropdown.click()

await dropdownList_container.evaluate((element)=>{
    element.scrollTop = element.scrollHeight
})
await option100.click()



/*by using locator 

locator.scrollIntoViewIfneeded 

page.mouse.wheel(x,y)

scroll the pag=> page.evaluate 

scroll the element container=> element.evavulate

selectOption()


*/


})


test('infinite scrolling until entire page is loaded by validating last book', async ({ page }) => {


await page.goto('https://www.booksbykilo.in/new-books', { waitUntil: 'load' })

while(true){
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    })
    let lastBookName = page.getByText('Life in the Biblical World',{exact:true})

    if(await lastBookName.isVisible()){
        break;
    }

}

})


test('infinite scrolling until entire page is loaded by using current height and previous height', async ({ page }) => {


await page.goto('https://www.booksbykilo.in/new-books', { waitUntil: 'load' })

let heighOfPagePreviously = await page.evaluate(()=>{
        return document.body.scrollHeight
    }) 


while(true){
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    })
  
    await page.waitForTimeout(3000)

    let newHiehtOfPage = await page.evaluate(()=>{
        return document.body.scrollHeight
    }) 

    if(heighOfPagePreviously==newHiehtOfPage){
        break;
    }

heighOfPagePreviously = newHiehtOfPage



}

})


// do infinite scrolling until your book is visible Mr Jelly





