import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.po';

export class LocationSelectionPanel extends BasePage {
    readonly agreeToCookiesButton: Locator;
    readonly locationSelectionPanel: Locator;
    readonly stateSelection: Locator;
    readonly postalCodeSelection: Locator;
    readonly privatePurpouse: Locator;
    readonly businessPurpouse: Locator;
    readonly locationContinueButton: Locator;

    constructor(page: Page) {
        super(page, "");
        this.agreeToCookiesButton = this.page.getByRole('button', { name: 'Agree to all' });
        this.locationSelectionPanel = this.page.getByRole('heading', { name: 'Please select your location' });
        this.stateSelection = this.page.getByLabel('* Your state');
        this.postalCodeSelection = this.page.getByText('* Postal Code');
        this.privatePurpouse = this.page.getByText('Private', { exact: true })
        this.businessPurpouse = this.page.getByText('Business', { exact: true })
        this.locationContinueButton = this.page.locator('[data-test-id="state-selected-modal__close"]');
      }

      async acceptCookies() {
        await this.agreeToCookiesButton.click();
      }

      async selectState(state: string) {
        await this.stateSelection.selectOption(state);
      }

      async fillPostalCode(postalCode: string) {
        await this.postalCodeSelection.fill(postalCode)
      }

      async checkPrivatePurpouse() {
        await this.privatePurpouse.setChecked(true);
      }

      async checkBusinessPurpouse() {
        await this.businessPurpouse.setChecked(true);
      }

      async confirmLocationSelection() {
        await this.locationContinueButton.click();
        await expect(this.locationSelectionPanel).not.toBeVisible();
      }
}