/*frame => webpage inside another webpage 

 <frame
 <iframe

 identifying frames:
 ==================
a)frameLocator

 1)await page.frameLocator('[src="demo_iframe.htm"]').locator('//h1')
 1)await page.frameLocator('css').locator()

b)frame Object  => name or url 

page.frame({
url:'https://www.w3schools.com/html/demo_iframe.htm'
}).locator()

page.frame({
name:'yyy'
}).getByRole


//nested frames




 */

import {expect,test} from '@playwright/test'

test("FrameProgram",async({page})=>{


  await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe");

//console.log(await page.locator('//h1').innerText())

   console.log(await page.frames().length)


let outerframe = page.frameLocator('iframe[id="iframeResult"]')  // outerframe 

let innerframe = outerframe.frameLocator('[src="demo_iframe.htm"]')  //inner frame


let text = await innerframe.locator('//h1').innerText()  // 30000ms

let output = await page.frameLocator('iframe[id="iframeResult"]').frameLocator('[src="demo_iframe.htm"]').locator('//h1').innerText()

console.log(text)

console.log(output)

let output3xpath = await page.frameLocator('//iframe[@id="iframeResult"]').frameLocator('//iframe[@src="demo_iframe.htm"]').locator('//h1').innerText()

//frame object 


let frameObj = page.frame({name:"iframeResult"});

console.log(await frameObj?.frameLocator('[src="demo_iframe.htm"]').locator('//h1').innerText())

console.log("xpathoutput",output3xpath)


//runing extension 

//running through

//page.frame({name:"iframeResult"})?.frameElement('[src="demo_iframe.htm"]').loc


})
