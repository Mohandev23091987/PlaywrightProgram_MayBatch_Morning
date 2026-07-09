import { expect, test } from '@playwright/test'


test.setTimeout(40000);

test("TraceViewer Program", async ({ page }) => {

    //test.slow();

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await expect(page.getByRole('heading', { name: 'PlaywrightPractice' })).toBeVisible({timeout:2000});

    //<button role="button">Primary Action</button>


    await page.getByRole('button', { name: 'Primary' }).waitFor({state:'visible',timeout:2000})
    await page.getByRole('button', { name: 'Primary' }).click({timeout:3000});
    
       
    //if you don't give anything it will take test timeout
    //if you give action timeout it will take that 

    //<input type="text" id="username" role="textbox">

    await page.getByRole('textbox', { name: 'Username' }).fill("Ravi")



})

test("TraceViewer2", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await expect(page.getByRole('heading', { name: 'PlaywrightPractice' })).toBeVisible({timeout:1000});  // 5

    //<button role="button">Primary Action</button>

    //await page.waitForTimeout(30000);
    
    //events 
    //hooks
    //fixtures

    await page.getByRole('button', { name: 'Primary12345' }).click({timeout:1000});

    //<input type="text" id="username" role="textbox">

    await page.getByRole('textbox', { name: 'Username' }).fill("Ravi")



})