import {test,expect} from '@playwright/test'

test('File upload ',async ({page})=>{

// find an element which takes input as file

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('testdata/resume.txt')
    await page.locator('#file-submit').click()
    await expect(page.getByRole('heading',{name:'File Uploaded'})).toBeVisible()
    await expect(page.locator('#uploaded-files')).toHaveText('resume.txt')

})

test('Upload single file by using fileChooser',async ({page})=>{

/*

event => filechooser

*/


// find an element which takes input as file
    await page.goto('https://the-internet.herokuapp.com/upload');
    //choose a file from your system or from project
    let [browsefileWindow] = await Promise.all([  // [filechooser,void]
    page.waitForEvent('filechooser'),
    await page.locator('#file-upload').click()
    ])

    //choosing files by using filechooser 
    await browsefileWindow.setFiles('testdata/resume.txt')  // background
    //clicking on upload
    await page.locator('#file-submit').click()

    //validations of file upload
    await expect(page.getByRole('heading',{name:'File Uploaded'})).toBeVisible()
    await expect(page.locator('#uploaded-files')).toHaveText('resume.txt')

})

test('Multiple Files upload using filechooser ',async ({page})=>{

// find an element which takes input as file

    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

    let [filechooserwindow] = await Promise.all([
    page.waitForEvent('filechooser'),
    await page.locator('input[type="file"]').click()
    ])
    
   await filechooserwindow.setFiles([
      'testdata/resume.txt',
      'testdata/sample.txt',
      'testdata/sample2.txt'

    ])


})
