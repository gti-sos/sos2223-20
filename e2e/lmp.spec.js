// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://sos2223-20.ew.r.appspot.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/SOS2223-20/);
  });

  test('has title', async ({ page }) => {
    await page.goto('https://sos2223-20.ew.r.appspot.com/api/v2/immovables');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Immuebles/);
  });