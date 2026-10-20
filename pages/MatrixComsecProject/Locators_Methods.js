/*

--- Methods using page.locator() mainly used for locating elements via CSS and Xpath

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
6. getByTitle() — <button title="Close">X</button> ---- page.getByTitle('Close').click();
7. getByAltText() — to locate an element, usually image, by its text alternative. <img src="logo.png" alt="Company Logo"> -- page.getByAltText('Company Logo').click();
8. Filter by child locator — .filter({ has: page.getByRole('button', { name: 'Buy' }) })
9. Chained locator — page.locator('.card').locator('.price')
10. Parent locator — page.locator('input').locator('..')
11. Combine locators with and() — page.getByRole('button').and(page.locator('.primary'))
12. Index with nth() — page.locator('.product').nth(2)


--- Actions
locator.click()
locator.fill('text')
locator.clear()
locator.press('Enter') Only need to enter the name of the key and then done.
locator.check()
locator.uncheck()
locator.selectOption('value') To manage the dropdowns. 
locator.hover()
locator.focus()
locator.blur()
locator.setInputFiles('filePath') used in Playwright to upload files through a file input element.
- await page.locator('input[type="file"]').setInputFiles('C:/files/resume.pdf');
count() returns the number of elements matching the locator
- const count = await page.locator('button').count();
- console.log(count);

--- Playwright methods that return Booleans
isChecked()	 Whether a checkbox or radio button is checked
isVisible()	 Whether an element is visible
isHidden()	 Whether an element is hidden
isEnabled()	 Whether an element is enabled
isDisabled() Whether an element is disabled
isEditable() Whether an element is editable
isFocused()	 Whether an element has focus


--- Get information
locator.textContent() – Returns the text content of an element, including hidden text.
locator.innerText() – Returns the visible, rendered text of an element.
locator.inputValue() – Returns the current value of an input field.
locator.getAttribute('href') – Returns the value of the element’s href attribute.


-- Assertions : Assertions are used to verify whether the actual result matches the expected result in a test.
await expect(page.locator('button')).toBeVisible();
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