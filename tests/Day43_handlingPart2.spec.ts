import {expect,test} from '@playwright/test'

test('Dependent Dropdown', async ({ page }) => {

    await page.goto('https://phppot.com/demo/jquery-dependent-dropdown-list-countries-and-states/');

    await page.selectOption('#country-list', '1');

    await page.waitForSelector('#state-list option');

    await page.selectOption('#state-list', '2');

});