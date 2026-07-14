import {expect,test} from '@playwright/test'


test.describe('all dropdown tests',()=>{
test('handling multi select drown',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
//multi select dropdown 
let multiSelectDropdown = page.locator('#colors');
await multiSelectDropdown.selectOption(['Red','Yellow']);
//validations
})



test('handling bootstrap down',async ({page})=>{
//BootStrap dropdown
//identify dropdown click on it 
// identify opotoin click on it 

await page.goto('https://coreui.io/bootstrap/docs/forms/multi-select/')

let dropdown= page.locator('#search-ms1')


await dropdown.first().click()

//selecting option
await page.locator('.form-multi-select-option',{hasText:'Angular'}).first().click();

await page.locator('.form-multi-select-option',{hasText:'Node.js'}).first().click();
await expect(dropdown.first()).toContainText('Angular')
await expect(dropdown.first()).toContainText('Node.js')
})

test('Search dropdown',async ({page})=>{

//identify dropdown click on it 
// identify opotoin click on it 
await page.goto('https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/')
let dropdown= page.locator('#country+span')
await dropdown.click()
//perform search 
await page.locator('.select2-search__field').last().fill('I')
//once option is displayed, click on the option
await page.locator('.select2-results__options>li',{hasText:'India'}).click()
await expect(dropdown).toHaveText('India')
})


test('Auto Suggestion Dropdown',async ({page})=>{

//identify dropdown click on it 
// identify opotoin click on it 
await page.goto('https://www.google.com/')

await page.locator('textarea[name="q"]').fill('Playwright')

// options will get populated 

await page.locator('ul[role="listbox"]>li span',{hasText:'playwright automation'}).click()

})

test('Dynamic dropdown',async ({page})=>{

//identify dropdown click on it 
// identify opotoin click on it 
await page.goto('https://www.google.com/')

await page.locator('textarea[name="q"]').fill('Playwright')

// options will get populated 

await page.locator('ul[role="listbox"]>li span',{hasText:'playwright automation'}).click()

})
})









