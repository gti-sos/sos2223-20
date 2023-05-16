// @ts-check
import { test, expect } from '@playwright/test';

test('immovables page has right title', async ({ page }) => {
    await page.goto('http://localhost:12345/api/v2/immovables');
    expect(await page.title()).toBe("Immuebles");
});

test('market-prices-stats create data works', async ({ page }) => {
    await page.goto('http://localhost:12345/api/v2/immovables');
    await page.getByText('Cargar Recursos').click();
    await page.waitForSelector('table');
    await expect((await page.$$('table tr')).length).toBeGreaterThan(1);
});