import type { Page } from '@playwright/test';

export async function closeAlert(page: Page) {
	await page.locator('[data-alert]').first().waitFor();
	await page.evaluate(() => {
		document.querySelectorAll('[data-alert]').forEach((el) => {
			const btns = el.querySelectorAll('button');
			if (btns.length) {
				for (const btn of Array.from(btns)) {
					if (btn.textContent?.includes('close')) {
						btn.click();
						break;
					}
				}
			}
		});
	});
}
