import { test } from '@playwright/test';

// Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via browserContext.storageState().
// When storage state is set up in the config, it is possible to reset storage state for a file:
// Reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } });

test('not signed in test', async ({ page }) => {
  // ...
});