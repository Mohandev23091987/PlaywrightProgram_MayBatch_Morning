



import {expect,test} from '@playwright/test'

test("handling elements @P1 @Login",async({page,browser,context})=>{


await page.goto("https://practice-automation.com/form-fields/");

await page.getByLabel('Name').first().fill('Ram')
await page.getByLabel('Name',{exact:true}).press('Tab')

await page.getByLabel('Password',{exact:true}).fill('mohan')
await page.getByLabel('Password',{exact:true}).clear()

await page.getByLabel('Password',{exact:true}).fill('Laxman')
console.log(await page.getByLabel('Password',{exact:true}).inputValue())

await page.getByLabel('Password',{exact:true}).waitFor({
    state:'visible',
    timeout:10000
})

await expect(page.getByLabel('Password',{exact:true})).toBeVisible({
timeout:4000
});

/*
operations on Checkboxes:

1)check()
2)uncheck()


3)click() // this is not recommended 

3)expect library you can verify visbility 

*/

let allcheckboxes = page.getByRole('checkbox');

let allcheckboxescount = await allcheckboxes.count()
console.log(allcheckboxescount)

await allcheckboxes.first().check();
await allcheckboxes.last().check();
await allcheckboxes.nth(2).check();
// await allcheckboxes.first().uncheck();
// await allcheckboxes.last().uncheck();
// await allcheckboxes.nth(2).uncheck();


for(let i=0; i<allcheckboxescount;i++){
    await allcheckboxes.nth(i).check();   
}

/*
operations can perform on a button 

1)click()
2)dbclick()
3)click({button:'right'})

//click using keyboard 

focus()
press('Enter')// 'space'

// by using expect you can check visibility
toBeVisible 
toBeEnabled
toBeDisabled 

*/

// await page.goto("https://demoqa.com/buttons")


// await page.locator('#doubleClickBtn').hover();
// await page.locator('#doubleClickBtn').dblclick()

// await page.getByRole('button',{name:'Right Click Me'}).hover()
// await page.getByRole('button',{name:'Right Click Me'}).click()

// await page.getByText('Click Me',{exact:true}).hover();
// await page.getByText('Click Me',{exact:true}).click({button:'right'})


/*

radio button 

1)check()

want to uncheck select another radiobutton

Assertion methods 

*/

await page.getByRole('radio',{name:'Blue'}).check();




////button[text()='Click Me']

//await page.getByText('Click Me',{exact:true})

//await page.getByRole('button',{name:'Click Me',exact:true})








test("loign tet  @p1 @regression",({page})=>{

    


})






})


