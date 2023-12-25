import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.po';

export class EnquirePage extends BasePage {
    readonly enquireButton: Locator;
    readonly contactDetailsPanel: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly phoneField: Locator;
    readonly postalCodeField: Locator;
    readonly privacyCheckBox: Locator;
    readonly proceedButton: Locator
    readonly emailFormatError: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        super(page, "")
        this.enquireButton = this.page.getByTestId('dcp-buy-box__contact-seller');
        this.contactDetailsPanel = this.page.getByText('Contact Details and Account');
        this.firstNameField = this.page.getByLabel('First Name')
        this.lastNameField = this.page.getByLabel('Last Name')
        this.emailField = this.page.getByLabel('E-Mail')
        this.phoneField = this.page.getByTestId('rfq-contact__phone').getByLabel('Phone')
        this.postalCodeField = this.page.getByLabel('Postal Code')
        this.privacyCheckBox = this.page.getByLabel('I have read and understood')
        this.proceedButton = this.page.getByTestId('dcp-rfq-contact-button-container__button-next')
        this.emailFormatError = this.page.getByText('Please enter a valid email address using a minimum of six characters.')
        this.errorMessage = this.page.getByText('An error has occurred.Please check the following sections: Please check the')
    }

    async clickEnquireButton() {
        await this.enquireButton.click();
        await expect(this.contactDetailsPanel).toBeVisible();
    }

    async fillFirstName(firstName: string) {
        await this.firstNameField.fill(firstName)
    }

    async fillLastName(lastName: string) {
        await this.lastNameField.fill(lastName)
    }

    async fillEmailField(email: string) {
        await this.emailField.fill(email)
    }

    async fillPhoneField(phoneField: string) {
        await this.phoneField.fill(phoneField)
    }

    async fillPostalCodeField(postalCodeField: string) {
        await this.postalCodeField.fill(postalCodeField)
    }

    async checkPrivacyCheckBox() {
        await this.privacyCheckBox.check({force: true});
        expect(this.privacyCheckBox).toBeChecked();
    }

    async clickProceedButton() {
        await this.proceedButton.click()
    }
}