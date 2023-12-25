import { test, expect } from '@playwright/test';
import { LocationSelectionPanel } from '../pages/LocationSelectionPanel.po';
import { HomePage } from '../pages/HomePage.po';
import { EnquirePage } from '../pages/EnquirePage.po'

test("Enquire highest priced car - invalid email format - should display error", async ({
    page,
    browserName,
  }) => {
    test.slow();
    const selectionPanel = new LocationSelectionPanel(page);
    const homepage = new HomePage(page);
    const enquirePage = new EnquirePage(page);
  
    await selectionPanel.goto();
    await selectionPanel.acceptCookies();
    await selectionPanel.selectState('New South Wales')
    await selectionPanel.fillPostalCode('2007')
    await selectionPanel.checkPrivatePurpouse();
    await selectionPanel.confirmLocationSelection();

    await homepage.openFilterPanel();
    await homepage.selectPreOwned();
    await homepage.selectColour('Black NonMetallic');
    await homepage.sortByDescendingPrice();
    await homepage.exploreFirstVehicle();

    await enquirePage.clickEnquireButton()
    await enquirePage.fillFirstName('John')
    await enquirePage.fillLastName('Smith')
    await enquirePage.fillEmailField('invalidMail.com')
    await enquirePage.fillPhoneField('0441234567')
    await expect(enquirePage.emailFormatError).toBeVisible();
    await enquirePage.fillPostalCodeField('2007')
    await enquirePage.checkPrivacyCheckBox()
    await enquirePage.clickProceedButton()
    await expect(enquirePage.errorMessage).toBeVisible();
  });