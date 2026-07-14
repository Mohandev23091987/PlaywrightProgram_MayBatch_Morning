import {expect,test} from '@playwright/test'

/*
//javascript alerts

dailog => browser generated popup displayed by javascript
when it stops normal flow of execution
then you have handle dialogs => accept / dismiss 

//types of dialogs 
1)alert  => infromation about dailog + ok button  
2)confirm => infromation about dailog, requests some confrimation from user + ok and cancel
3)Prompt  => request text from the user + textbox, ok and cancel 
4)beforeunload => warns the user before leaving or closing a page => leave or cancel

steps to handle Dialog 

1)Register the dialog - page.on
2)inside the dailog handler perform the actions 



page.on('dailog',async dialog=>{

await dialog.accept();
await dialog.dismiss();
awiat dialog.message();
await dialog.type();  => alert 
await dialog.defaultValue()
let diaplogPage = await dialog.page()
console.log(diaplogPage.title())


//authentication popups - username and password 
browser.newContext({
httpcredentails:{
username:
password:
}
})

//new tab handling // promise.all 

//modal popup => html popup , write the locators and handle


waitForEvent
//file upload 
page.locator().setInputFiles()

//file download


saveAs("")

//

//permission popup
context.grantPermission('')



})



*/



test('Handling Simple Alert Dialog ',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
page.on('dialog',async dialog=>{
    //validations
console.log(dialog.message())
console.log(dialog.type())
expect(dialog.type()).toContain('alert')
expect(dialog.message()).toBe('I am an alert box!')
//handling a popup
await dialog.accept();
})
await page.locator('#alertBtn').first().click()
})


test('Handling confirm Alert Dialog ',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
page.on('dialog',async dialog=>{
    //validations
console.log(dialog.message())
console.log(dialog.type())
expect(dialog.type()).toContain('confirm')
expect(dialog.message()).toBe('Press a button!')
//handling a popup
await dialog.dismiss();
})
await page.locator('#confirmBtn').first().click()
})


test('Handling a prompt dialog',async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

page.on('dialog', async dialog => {
        //validations
console.log(dialog.message())
console.log(dialog.type())
console.log(dialog.defaultValue())
expect(dialog.type()).toContain('prompt')
expect(dialog.message()).toBe('Please enter your name:')
expect(dialog.defaultValue()).toBe('Harry Potter')
await page.waitForTimeout(5000)
//handle the popup 
dialog.accept('Handing prompt dialog');
})

await page.locator('#promptBtn').first().click()
})