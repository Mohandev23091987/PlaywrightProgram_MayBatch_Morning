import { test, expect } from '@playwright/test'
//validation of pagination tables
test('Validate entires on a page ', async ({ page }) => {

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html', { waitUntil: 'load' })

    let entriesDropDown = page.locator('#dt-length-0')

    await entriesDropDown.selectOption({ label: '50' })

    //getting all rows 
    let allRowsSelector = await page.locator('#example tbody tr') // 50rows select
    await expect(allRowsSelector).toHaveCount(50)

    //arrays concept
    let allRowsSelectorinArray = await page.locator('#example tbody tr').all()
    //console.log(allRowsSelectorinArray)
    await expect(allRowsSelectorinArray.length).toBe(50)

})

test('search a person name and validate its details', async ({ page }) => {

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html', { waitUntil: 'load' })

    await page.getByLabel('Search:').fill('Yuri Berry')

    let arrayOfrows = await page.locator('#example tbody tr').all()
    await expect(arrayOfrows.length).toBe(1)

    let office = await arrayOfrows[0].locator('td').nth(2).innerText()
    let startdate = await arrayOfrows[0].locator('td').nth(4).innerText()
    let salary = await arrayOfrows[0].locator('td').nth(5).innerText()

    console.log(`person details are : office :${office}, startdate:${startdate} and person salary is ${salary}`)

    await expect(office).toBe('New York')

})

test('search a person name and validate its details of mutliple rows', async ({ page }) => {

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html', { waitUntil: 'load' })

    await page.getByLabel('Search:').fill('gavin')

    let arrayOfrows = await page.locator('#example tbody tr').all()
    expect(arrayOfrows.length).toBe(2)

    for (let row of arrayOfrows) {

        // console.log(await row.innerText())

        //     let salary = await row.locator('td').nth(5).innerText();

        //    await expect(salary).toBeGreaterThan(5000)

        let personname = await row.locator('td').nth(0).innerText()
        let office = await row.locator('td').nth(2).innerText()
        let startdate = await row.locator('td').nth(4).innerText()
        let salary = await row.locator('td').nth(5).innerText()

        console.log(` ${personname} person details are : office :${office}, startdate:${startdate} and person salary is ${salary}`)

        //validations

    }

})

test('pagination program', async ({ page }) => {

    await page.goto(
        'https://datatables.net/examples/basic_init/zero_configuration.html'
    );

    // Wait until the employee table is visible
    await expect(page.locator('#example')).toBeVisible();

    const personName = 'Michael Bruce';
    let personFound = false;

    // Correct locator for the Next pagination button
    const nextButton = page.locator(
        'button.dt-paging-button.next'
    )

    while (true) {

        // Get all visible rows from the current page
        const rows = page.locator('#example tbody tr');
        const rowCount = await rows.count();

        console.log(`Rows on current page: ${rowCount}`);

        for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {

            const currentRow = rows.nth(rowIndex);
            const cells = currentRow.locator('td');

            const currentName = (
                await cells.nth(0).innerText()
            ).trim();

            console.log('Checking:', currentName);

            // Do not put personName inside quotes
            if (currentName === personName) {

                personFound = true;

                const position = (
                    await cells.nth(1).innerText()
                ).trim();

                const office = (
                    await cells.nth(2).innerText()
                ).trim();

                const age = (
                    await cells.nth(3).innerText()
                ).trim();

                const startDate = (
                    await cells.nth(4).innerText()
                ).trim();

                const salary = (
                    await cells.nth(5).innerText()
                ).trim();

                console.log('Employee found');
                console.log('Name:', currentName);
                console.log('Position:', position);
                console.log('Office:', office);
                console.log('Age:', age);
                console.log('Start date:', startDate);
                console.log('Salary:', salary);

                // Validations for Michael Bruce
                await expect(cells.nth(0)).toHaveText(
                    'Michael Bruce'
                );

                await expect(cells.nth(1)).toHaveText(
                    'JavaScript Developer'
                );

                await expect(cells.nth(2)).toHaveText(
                    'Singapore'
                );

                await expect(cells.nth(3)).toHaveText(
                    '29'
                );

                await expect(cells.nth(4)).toHaveText(
                    '2011-06-27'
                );

                await expect(cells.nth(5)).toHaveText(
                    '$183,000'
                );

                break;
            }
        }

        // Stop pagination after finding the employee
        if (personFound) {
            break;
        }

        // Check whether Next is disabled
        const isNextDisabled =
            await nextButton.isDisabled();

        // If disabled, we reached the last page
        if (isNextDisabled) {
            break;
        }

        // Capture the first row before clicking Next
        const firstRowBeforeClick = await rows
            .first()
            .innerText();

        await nextButton.click();

        // Wait until the table content changes
        await expect(rows.first()).not.toHaveText(
            firstRowBeforeClick
        );
    }

    expect(
        personFound,
        `Employee "${personName}" was not found in the table`
    ).toBeTruthy();
})


test('filtering pagination program', async ({ page }) => {

    await page.goto(
        'https://datatables.net/examples/basic_init/zero_configuration.html'
    );

    await expect(page.locator('#example')).toBeVisible();

    const personName = 'Michael Bruce';
    let personFound = false;

    const nextButton = page.locator(
        'button.dt-paging-button.next'
    );

    while (true) {

        /*
         * This locator finds rows on the current page
         * that contain the text stored in personName.
         */
        const matchingRows = page.locator(
            '#example tbody tr',
            { hasText: personName }
        );

        const matchingRowCount = await matchingRows.count();

        console.log(
            `Matching rows on current page: ${matchingRowCount}`
        );

        if (matchingRowCount > 0) {

            const matchedRow = matchingRows.first();
            const cells = matchedRow.locator('td');

            const actualName = (
                await cells.nth(0).innerText()
            ).trim();

            /*
             * hasText checks the complete row.
             * Therefore, we additionally verify that
             * the first column exactly matches the name.
             */
            if (actualName === personName) {

                personFound = true;

                const position = (
                    await cells.nth(1).innerText()
                ).trim();

                const office = (
                    await cells.nth(2).innerText()
                ).trim();

                const age = (
                    await cells.nth(3).innerText()
                ).trim();

                const startDate = (
                    await cells.nth(4).innerText()
                ).trim();

                const salary = (
                    await cells.nth(5).innerText()
                ).trim();

                console.log('Employee found');
                console.log('Name:', actualName);
                console.log('Position:', position);
                console.log('Office:', office);
                console.log('Age:', age);
                console.log('Start date:', startDate);
                console.log('Salary:', salary);

                await expect(cells.nth(0)).toHaveText(
                    'Michael Bruce'
                );

                await expect(cells.nth(1)).toHaveText(
                    'JavaScript Developer'
                );

                await expect(cells.nth(2)).toHaveText(
                    'Singapore'
                );

                await expect(cells.nth(3)).toHaveText(
                    '29'
                );

                await expect(cells.nth(4)).toHaveText(
                    '2011-06-27'
                );

                await expect(cells.nth(5)).toHaveText(
                    '$183,000'
                );

                break;
            }
        }

        const isNextDisabled = await nextButton.isDisabled();

        if (isNextDisabled) {
            break;
        }

        const firstRowBeforeClick = await page
            .locator('#example tbody tr')
            .first()
            .innerText();

        await nextButton.click();

        await expect(
            page.locator('#example tbody tr').first()
        ).not.toHaveText(firstRowBeforeClick);
    }

    expect(
        personFound,
        `Employee "${personName}" was not found`
    ).toBeTruthy();
});


