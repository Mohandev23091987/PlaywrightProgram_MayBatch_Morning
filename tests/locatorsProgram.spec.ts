import { test, expect,chromium } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
 await page.setViewportSize({
    width: 1920,
    height: 1080
  });

  await page.getByRole('radio',{name:'Male',exact:true}).click();
  
});