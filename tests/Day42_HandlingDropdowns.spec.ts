import {expect,test} from '@playwright/test'

test("Handing Drowns",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");


test.setTimeout(2*60*1000)
// identify a dropdown 
//select option 

//select => options its called normal dropdown

let countryDropDown = page.locator('#country');



//visible text
await countryDropDown.selectOption('Germany')

//await page.waitForTimeout(9000);

// second syntax to select visible text 
await countryDropDown.selectOption({label:'Japan'})
//await page.waitForTimeout(9000);

// by using value
await countryDropDown.selectOption({value:'uk'})

//index 
await countryDropDown.selectOption({index:1})


//await page.waitForTimeout(9000);


// validations

await expect(countryDropDown).toHaveValue(/Canada/i);
//await expect(countryDropDown).toHaveCount(10);





await expect(countryDropDown).toContainText('Japan')

console.log(await countryDropDown.textContent()) // all options text 


let alloptionTexts = await countryDropDown.textContent();
await expect(alloptionTexts?.includes('Japan')).toBeTruthy()


//get all option elements 
////select[@id='country']/option

let alloptionelements = await page.locator('#country>option').all();

for(let option of alloptionelements){

    let optionText = await option.textContent();
    if(optionText === 'Japan'){
        console.log('option is present')
        break;
    }
}


//

let alloptionsText = await page.locator('#country>option').allTextContents();
console.log(alloptionsText)


//verify 

await expect(page.locator('#country>option')).toContainText(

    ['United States','Canada','United Kingdom']


)

})