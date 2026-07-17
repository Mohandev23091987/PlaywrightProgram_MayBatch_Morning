import {test,expect} from '@playwright/test'
import path from 'path'

test('Downloading a File',async ({page})=>{
/*
event => 'download'
*/
    await page.goto('https://the-internet.herokuapp.com/download');

    let [downloadwindow]= await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link',{name:'sample-upload.txt'}).click()
    ])

    console.log('suggested file name from browser',downloadwindow.suggestedFilename())

    //let filepath = path.join('./testdata',downloadwindow.suggestedFilename())
    
    //saving to local

    let filepath = path.join('C:/LocalFolder3',downloadwindow.suggestedFilename())
    await downloadwindow.saveAs(filepath)

})