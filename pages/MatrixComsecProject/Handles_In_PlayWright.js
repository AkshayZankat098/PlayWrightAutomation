/*

1. Alert handling	
- Handles JavaScript alerts, confirms, and prompts. page.on('dialog', dialog => dialog.accept())
- on() → An event listener that detects when an alert appears.
- accept()	Clicks OK on an alert or confirm dialog
- dismiss()	Clicks Cancel on a confirm or prompt dialog
- message()	Returns the alert message text
- type()	Returns the dialog type: alert, confirm, prompt, or beforeunload
- defaultValue()	Returns the default text in a prompt dialog

2. Dropdown handling	
- Selects an option from a native HTML dropdown. await page.locator('select').selectOption('India')

3. Frame / iFrame handling	
- Interacts with elements inside an iframe. page.frameLocator('#frame').locator('#email').fill('test@gmail.com')

4. Multiple tabs / windows	Handles 
- a newly opened tab or window. const newPage = await page.context().waitForEvent('page')

5. File upload	
- Uploads a file through an input element. await page.locator('input[type="file"]').setInputFiles('resume.pdf')

6. File download	
- Captures a file download event. const downloadPromise = page.waitForEvent('download'); await page.locator('#download').click(); const download = await downloadPromise;

7. Drag and drop	
- Drags one element onto another. await page.locator('#source').dragTo(page.locator('#target'))

8. Waiting / synchronization	Waits for a specific element state. await page.locator('#success').waitFor({ state: 'visible' })

























*/