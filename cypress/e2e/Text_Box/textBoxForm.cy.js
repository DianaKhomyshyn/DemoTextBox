import config from '../../../config.json';
import formData from '../../fixtures/formData.json';
import TextBoxTab from '../../support/textBoxTab';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe ('Text Box Tab', () =>
{
    beforeEach (() => {
        cy.visit(config.baseUrl);
    })

    it('Verify that form title and form are present', () => {
        const textBoxTab = new TextBoxTab();
        textBoxTab.checkFormTitleExist();
        textBoxTab.checkFormTitleText('Text Box')
        textBoxTab.checkFormExist();
    })

    it('Verify that all form fields and the Submit button are present', () => {
        const textBoxTab = new TextBoxTab();
        textBoxTab.checkFullNameFieldExist();
        textBoxTab.checkEmailFieldExist();
        textBoxTab.checkCurrentAddressExist();
        textBoxTab.checkPermanentAddressExist();
        textBoxTab.checkSubmitButtonExist();
    })

    it('Verify if the output section isn\'t appear on the screen after submiting the form with all fields empty', () => {
        const textBoxTab = new TextBoxTab();
        textBoxTab.checkFullNameFieldEmpty();
        textBoxTab.checkEmailFieldEmpty();
        textBoxTab.checkCurrentAddressEmpty();
        textBoxTab.checkPermanentAddressEmpty();
        textBoxTab.clickSubmitButton();
        textBoxTab.checkOutputAreaNotExist();
    })

    it('Verify that the form does not accept an invalid email', () => {
        const textBoxTab = new TextBoxTab();
        textBoxTab.enterEmail(formData.incorrectEmail);
        textBoxTab.clickSubmitButton();
        textBoxTab.checkEmailErrorField();
    })

    it('Ensure that output area is displayed after entering valid data in all fields and submitting the form', () => {
        const textBoxTab = new TextBoxTab();
        textBoxTab.enterFullName(formData.fullName);
        textBoxTab.enterEmail(formData.correctEmail);
        textBoxTab.enterCurrentAddress(formData.currentAddress);
        textBoxTab.enterPermanentAddress(formData.permanentAddress);
        textBoxTab.clickSubmitButton();
        textBoxTab.checkOutputAreaExist();
    })

    it('Ensure that the entered data is correctly displayed in the output section', () => {
        const textBoxTab = new TextBoxTab();
        textBoxTab.enterFullName(formData.fullName);
        textBoxTab.enterEmail(formData.correctEmail);
        textBoxTab.enterCurrentAddress(formData.currentAddress);
        textBoxTab.enterPermanentAddress(formData.permanentAddress);
        textBoxTab.clickSubmitButton();
        textBoxTab.checkOutputFullName(`Name:${formData.fullName}`);
        textBoxTab.checkOutputEmail(`Email:${formData.correctEmail}`);
        textBoxTab.checkOutputCurrentAddress(`Current Address :${formData.currentAddress} `);
        textBoxTab.checkOutputPermanentAddress(`Permananet Address :${formData.permanentAddress}`);
    })

    it('Check if deleted fields disappear from the output section afetr cleaning values from the form', () => {
        const textBoxTab = new TextBoxTab();
        textBoxTab.enterFullName(formData.fullName);
        textBoxTab.enterEmail(formData.correctEmail);
        textBoxTab.enterCurrentAddress(formData.currentAddress);
        textBoxTab.enterPermanentAddress(formData.permanentAddress);
        textBoxTab.clickSubmitButton();
        textBoxTab.checkOutputFullName(`Name:${formData.fullName}`);
        textBoxTab.checkOutputEmail(`Email:${formData.correctEmail}`);
        textBoxTab.checkOutputCurrentAddress(`Current Address :${formData.currentAddress} `);
        textBoxTab.checkOutputPermanentAddress(`Permananet Address :${formData.permanentAddress}`);
        textBoxTab.clearFullName();
        textBoxTab.clearEmail();
        textBoxTab.clearCurrentAddress();
        textBoxTab.clearPermanentAddress();
        textBoxTab.clickSubmitButton();
        textBoxTab.checkOutputAreaNotExist();
    })
})