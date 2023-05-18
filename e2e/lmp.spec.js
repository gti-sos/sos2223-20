// @ts-check
import { test, expect } from '@playwright/test';

test('immovables page has right title', async ({ page }) => {
    await page.goto('https://sos2223-20.ew.r.appspot.com/api/v2/immovables');
    expect(await page.title()).toBe("Immuebles");
});

test('immovables create data works', async ({ page }) => {
    await page.goto('https://sos2223-20.ew.r.appspot.com/api/v2/immovables');
    await page.getByText('Cargar Recursos').click();
    await page.waitForSelector('Table');
    await expect((await page.$$('table tr')).length).toBeGreaterThan(1);
});