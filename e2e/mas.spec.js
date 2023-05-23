// @ts-check
import { test, expect } from '@playwright/test';

test('Campings page has right title', async ({ page }) => {
    await page.goto('https://sos2223-20.ew.r.appspot.com/api/v2/campings');
    expect(await page.title()).toBe("Campings");
});

test('Campings create data works', async ({ page }) => {
    await page.goto('https://sos2223-20.ew.r.appspot.com/api/v2/campings');
    await page.getByText('Cargar Recursos').click();
    await page.waitForSelector('Table');
    await expect((await page.$$('table tr')).length).toBeGreaterThan(1);
});