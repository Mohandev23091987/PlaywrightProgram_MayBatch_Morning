/*

Mouse actions in two ways 
1)on locators you are going to have direct methods
2)Low level mouse APIs 
   page.mouse.

*/

import { test, expect } from '@playwright/test'
//validation of pagination tables
test('Performin click ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })
    let button = page.getByRole('button', { name: 'New Tab' }).first();
    await expect(button).toBeVisible()
    await button.click();

    //validate the title for a new page as 'SDET-QA Blog'
})


test('Mouse over and perform click ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })
    //locotors 
    let menu = page.getByRole('button', { name: 'Point Me' })
    let mobileoption = page.getByText('Mobiles', { exact: true })

    //perform action on it
    await menu.hover();
    await expect(mobileoption).toBeVisible()
    await mobileoption.click()
})


test('Performing double Click ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })
    //locators 

    let field1_texbox = page.locator('#field1')
    let field2_texbox = page.locator('#field2')
    let copyText_Button = page.getByRole('button', { name: 'Copy Text' })

    //perform action on it

    await field1_texbox.fill('learning plawright')
    await copyText_Button.dblclick()

    //validation part 

    await expect(field2_texbox).toHaveValue('learning plawright')


})


test('Performing Right Click ', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons', { waitUntil: 'load' })
    //locators 
    let button = page.getByRole('button', { name: 'Right Click Me' })
    let textElement = page.locator('#rightClickMessage')
    //perform action on it
    await button.click({ button: 'right' })
    let text = await textElement.innerText()
    //validation part 
    expect(text).toBe(text)

})

test('Middle Click ', async ({ page }) => {

    await page.goto('https://playwright.dev/', { waitUntil: 'load' })

    //locators 
    let getStarted_link = page.getByRole('link', { name: 'Get started' })

    //perform action on it
    await getStarted_link.click({ button: 'middle' })



})

test('Drag and drop operaion', async ({ page }) => {

    /*
    
    draggable => you want to drap and should be dropped on dropple thing  
    
    droppable => you can't move
    
    way1:
    source.dragTO(target)
    
    */

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })

    //locators 
    let source = page.locator('#draggable')
    let target = page.locator('#droppable')

    //perform action on it
    await expect(source).toBeVisible()
    await expect(target).toBeVisible()

    await source.dragTo(target)

    //validation 
    await expect(target).toContainText('Dropped!')
})

test('Drag and drop operaion by using mouse low level actions', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' })

    //locators 
    let source = page.locator('#draggable')
    let target = page.locator('#droppable')

    //perform action on it
    await expect(source).toBeVisible()
    await expect(target).toBeVisible()

  
    await source.hover()
    await page.mouse.down() // click on element and hold it
    //moving to traget 
    await target.hover()   //  click on element and hold it => dragging 
    //release the mouse 
    await page.mouse.up()  // releasing click =>drop

    //validation 
    await expect(target).toContainText('Dropped!')

})

//collections 
//list and tuples 



