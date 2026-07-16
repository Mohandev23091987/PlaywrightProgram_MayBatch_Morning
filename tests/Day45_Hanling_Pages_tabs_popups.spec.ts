/*

playwright => install => binaries => chromium,firefox,webkit

// channel:Chrome


Browser => your browser applicaiton or browser binary - Chromium,firefox and webkit 
Browser Context => its independent browser session/isolated or userprofile
page/newtab/popup =>  one browsertab or page or browser window popup

Browser1  = > launch 
     context1  - storage cookies user session
        filkarpage  = > navigaets , handling
        amazonpage 
    context2  - storage cookies user session
      gmailpage



      chromium/firefox/webkit
      launch => browser => newContext()=> context=> newPage()=> page

by using browser object you can handle all browser related thigns
================================================================= 

create a contex => newContext()
get array of contexts you created => browser.contexts().length
browser version=> version()
connected or not => isConnected()
browser.close()


launch context options 

//context methods
context.newPage() => creates a new page 
context.pages() => array of pages 
 context.pages().length() => number of pages for a context 
 context.waitForEvent('page')

 context.cookies()

 context.addCookies()
 context.clearCookies()

 conext.close();



*/

import { expect, test, chromium, firefox } from '@playwright/test'

test('Handling tabs/pages', async () => {

    let browser = await chromium.launch({
        headless: false,
        //channel:'chrome'
    });


    

    let context1 = await browser.newContext();
    let context2 = await browser.newContext();

    


    let page1 = await context1.newPage();
    //await context1.waitForEvent('page');
    let page3 = await context1.newPage();
    await page1.goto("https://www.flipkart.com/");
    await page3.goto("https://www.amazon.in/");

    let page2 = await context2.newPage();
    await page2.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

   

    console.log(browser.contexts().length)
    console.log(browser.version)
    console.log(browser.isConnected())

    // await browser.close()

    console.log(context1.pages().length)
    await context1.close()



    //context methods 
    /*
    cookies 
    local storage
    session storage
    cache 
    login session 
    permissions
    geo location 
    authenticatin state
    
    handling dimension 
    */

})

test('Handling browserContext', async () => {

    let browser = await chromium.launch({
        headless: false,
        //channel:'chrome'
    });

    let context1 = await browser.newContext({
        viewport: {
            width: 390,
            height: 844
        },
        locale: 'en-US',
        isMobile: true
    });
    let page1 = await context1.newPage();




    //context methods 
    /*
    cookies 
    local storage
    session storage
    cache 
    login session 
    permissions
    geo location 
    authenticatin state
    
    handling dimension 
    */

})

test('Authentication poup handling', async () => {

    let browser = await firefox.launch();
    let context = await browser.newContext({
       httpCredentials:{
        username:'admin',
        password:'admin'
       }


    });
    let page = await context.newPage()

    await page.goto("https://the-internet.herokuapp.com/basic_auth");



    //context methods 
    /*
    cookies 
    local storage
    session storage
    cache 
    login session 
    permissions
    geo location 
    authenticatin state
    
    handling dimension 
    */

//await context.storageState({path:'C/landigpage.json'})


//const context = await browser.newContext({storagestate: 'C/landigpage.json'})


})