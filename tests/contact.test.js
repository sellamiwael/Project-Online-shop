const { test, expect } = require('@playwright/test');

test('should prevent form submission if fields are empty', async ({ page }) => {
  await page.goto('http://54.91.90.140/contact.html');
  await page.click('button[type="submit"]');
  const nameInput = await page.locator('#name');
  await expect(nameInput).toBeFocused();
});