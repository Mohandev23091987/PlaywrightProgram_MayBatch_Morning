import { test } from '@playwright/test';

test('maximize browser window', async ({ page, context }) => {
  const session = await context.newCDPSession(page);

  const { windowId } = await session.send('Browser.getWindowForTarget');

  await session.send('Browser.setWindowBounds', {
    windowId,
    bounds: {
      windowState: 'maximized'
    }
  });

  await page.goto('https://demoqa.com');
  await page.waitForTimeout(3000);
});
