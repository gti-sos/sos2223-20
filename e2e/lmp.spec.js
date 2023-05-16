// @ts-check
import { test, expect } from '@playwright/test';

test('immovables page has right title', async ({ page }) => {
    await page.goto('https://sos2223-20.ew.r.appspot.com/');
    expect(await page.title()).toBe("/SOS2223-20/");
});