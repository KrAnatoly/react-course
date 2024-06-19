import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const booksTitle = page.getByText('Books');

  // Expect a title "to contain" a substring.
  expect(booksTitle).toBeDefined;
});