import {expect,test} from '@playwright/test'

test("Handling Multiple Elements",async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");



 let labelsLocators = page.locator('//div[@class="form-group"]//label');

 console.log("==============================")
console.log(await labelsLocators.first().textContent())

 console.log("==============================")
console.log(await labelsLocators.last().textContent())

 console.log("==============================")
console.log(await labelsLocators.nth(2).textContent())

console.log(await labelsLocators.filter({hasText:'Phone:'}).getAttribute('for'))

await labelsLocators.first().click({button:'right'});


 let numberOfLabels = await labelsLocators.count()
 console.log(numberOfLabels)

 for(let i= 0; i <numberOfLabels ; i++){

    console.log(await labelsLocators.nth(i).getAttribute('for'));

 }

 //all text contents 
console.log("===============printing with alltextocontent=============================")
 console.log(await labelsLocators.allTextContents());
console.log("===============printing with allInnerTexts=============================")
 console.log(await labelsLocators.allInnerTexts());

//15

//grocies 

let placeholder = await page.locator('//div[@class="form-group"]').first().locator('//input[@id="name"]').getAttribute('placeholder');

console.log(placeholder);

console.log(await page.locator('#country').allTextContents())


let expected = '123';

await page.locator('//*[@id="name"]').clear();
await page.locator('//*[@id="name"]').fill(expected);


let actual = await page.locator('//*[@id="name"]').inputValue();

expect(actual).toBe(expected);

if(expected==actual){

    console.log('values are matched')
}

//button
//check

expect(actual).toBe(expected);




await expect(page.locator('#country')).



})