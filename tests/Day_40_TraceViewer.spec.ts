/*
Traceivewer:

1)GUI tool it will record complete execution of a test 
2)captures every action performed during execution => 
snapshots, 
timelines
network requests and responses 
consolelogs 
source mapping
timing information

// how your going to enable from palywright.config.ts
//how your going to configure from your test case 
// how I can configure through command line while executing the test


trace : on  => it will record results for everytest // not a best practice
trace :'off' => Don't record the trace
trace : 'retain-on-failure' => record results on failed tests 
trace : 'on-first-retry'  // record the results at first retry  

retries:1


*/



import { expect, test } from '@playwright/test'

test("TraceViewer Program", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await expect(page.getByRole('heading', { name: 'PlaywrightPractice' })).toBeVisible();

    //<button role="button">Primary Action</button>

    await page.getByRole('button', { name: 'Primary' }).click();

    //<input type="text" id="username" role="textbox">

    await page.getByRole('textbox', { name: 'Username' }).fill("Ravi")



})