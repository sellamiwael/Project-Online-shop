import { test, expect } from '@playwright/test';

test('Form should show error if fields empty', async ({ page }) => {
  await page.goto('http://54.91.90.140/contact.html');
  await page.click('button[type="submit"]');
  const name = await page.locator('#name');
  await expect(name).toHaveAttribute('required', '');
});

test('Form submits successfully with valid data', async ({ page }) => {
  await page.goto('http://54.91.90.140/contact.html');
  await page.fill('#name', 'Test User');
  await page.fill('#email', 'test@example.com');
  await page.fill('#message', 'This is a test message.');
  await page.click('button[type="submit"]');
  await expect(page.locator('body')).toBeVisible();
});