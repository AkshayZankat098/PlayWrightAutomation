/*

--- Methods using page.locator()

1. By ID: page.locator('#username')
2. By attribute: page.locator('[name="email"]')
3. CSS selector: page.locator('input[name="email"]')
4. XPath: page.locator('//input[@id="username"]')
5. Chained locator: page.locator('form').locator('input')
6. Filter by text: page.locator('.product').filter({ hasText: 'Laptop' })
7. Descendant locator: page.locator('div').getByRole('button', { name: 'Save' })
8. Index: page.locator('button').nth(1)
9. First element: page.locator('button').first()
10. Last element: page.locator('button').last()
11. Visible elements: page.locator('button:visible')

-- Others Methods 
1. getByRole() — page.getByRole('button', { name: 'Login' })
2. getByLabel() — page.getByLabel('Email')
3. getByPlaceholder() — page.getByPlaceholder('Enter email')
4. getByText() — page.getByText('Welcome')
5. getByTestId() — page.getByTestId('submit-button')
6. getByTitle() — to locate an element by its title attribute.
7. getByAltText() — to locate an element, usually image, by its text alternative.
8. Filter by child locator — .filter({ has: page.getByRole('button', { name: 'Buy' }) })
9. Chained locator — page.locator('.card').locator('.price')
10. Parent locator — page.locator('input').locator('..')
11. Combine locators with and() — page.getByRole('button').and(page.locator('.primary'))
12. Index with nth() — page.locator('.product').nth(2)


--- Actions
locator.click()
locator.fill('text')
locator.clear()
locator.press('Enter')
locator.check()
locator.uncheck()
locator.selectOption('value')
locator.hover()
locator.focus()
locator.blur()
locator.setInputFiles('filePath')

fill(), clear(), press(), check(), uncheck(), isChecked(), toBeChecked(), click()
selectOption(), inputValue(), toHaveValue(), count(), click(), evaluate()


--- Get information
locator.textContent()
locator.innerText()
locator.inputValue()
locator.getAttribute('href')
locator.isVisible()
locator.isEnabled()
locator.isDisabled()
locator.isChecked()

-- Locate elements
locator.count()
locator.first()
locator.last()

-- Assertions (Playwright Test)

await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toHaveText('text');
await expect(locator).toContainText('text');
await expect(locator).toHaveValue('value');
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
await expect(locator).toHaveCount(2);
await expect(locator).toHaveAttribute('name', 'email');
await expect(page).toHaveURL('https://example.com');
await expect(page).toHaveTitle('Home Page');



*/