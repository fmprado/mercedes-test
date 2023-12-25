import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.po';

export class HomePage extends BasePage {
    readonly filterButton: Locator;
    readonly preOwnedButton: Locator;
    readonly filterByColour: Locator;
    readonly filterByColourSelector: Locator;
    readonly filterByColourList: Locator;
    readonly sortingButton: Locator;
    readonly exploreButton: Locator;

    constructor(page: Page) {
        super(page, "")
        this.filterButton = this.page.locator('.show > path');
        this.preOwnedButton = this.page.getByRole('button', { name: 'Pre-Owned' })
        this.filterByColour = this.page.locator('div').filter({ hasText: /^Colour$/ })
        this.filterByColourSelector = this.page.getByText('Colour 0')
        this.filterByColourList = this.page.locator('[data-test-id="multi-select-dropdown"]')
        this.sortingButton = this.page.getByLabel('Sorting');
        this.exploreButton = this.page.locator('a').filter({ hasText: 'Explore' });
    }

    async openFilterPanel() {
        await this.filterButton.click();
        await expect(this.preOwnedButton).toBeVisible();
    }

    async selectPreOwned() {
        await expect(this.preOwnedButton).toBeVisible();
        await this.preOwnedButton.click();
    }

    async selectColour(colour: string) {
        await this.filterByColour.click();
        await this.filterByColourSelector.click();
        await this.page.getByText(colour).click();
    }

    async sortByDescendingPrice() {
        this.sortingButton.selectOption('Price (descending)')
    }

    async exploreFirstVehicle() {
        this.exploreButton.first().click()
    }
}