/**
 * @class TextBoxTab
 * @classdesc Encapsulates interactions with the form elements on the TextBoxTab page.
 * Provides methods to check the existence, visibility, and content of form fields,
 * as well as to enter data and clear fields.
 */

class TextBoxTab {

    /**
     * Contains Cypress element selectors for the TextBoxTab form.
     */
    elements = {
        formTitle : () => cy.get('h1.text-center'),
        formElement : () => cy.get('form#userForm'),
        fullNameLabel : () => cy.get('#userName-label'),
        emailLabel : () => cy.get('#userEmail-label'),
        currentAddressLabel : () => cy.get('#currentAddress-label'),
        permanentAddressLabel : () => cy.get('#permanentAddress-label'),
        fullNameInput : () => cy.get('input#userName'),
        emailInput : () => cy.get('input#userEmail'),
        emailErrorInput : () => cy.get('input#userEmail.field-error'),
        currentAddressTextArea : () => cy.get('textarea#currentAddress'),
        permanentAddressTextArea : () => cy.get('textarea#permanentAddress'),
        submitButton : () => cy.get('button#submit'),
        outputArea : () => cy.get('#output'),
        outputName : () => cy.get('p#name'),
        outputEmail : () => cy.get('p#email'),
        outputCurrentAddress : () => cy.get('p#currentAddress'),
        outputPermanentAddress: () => cy.get('p#permanentAddress'),
    }

    checkFormTitleExist() {
        this.elements.formTitle()
            .should('be.visible')
    }

    // * @param {string} value - The expected text of the form title.
    checkFormTitleText(value) {
        this.elements.formTitle()
            .should('have.text', value)
    }

    checkFormExist() {
        this.elements.formElement()
            .scrollIntoView()
            .should('be.visible')
    }

    checkFullNameFieldExist() {
        this.elements.fullNameLabel()
            .scrollIntoView()
            .should('be.visible');
        this.elements.fullNameInput()
            .should('be.visible');
    }

    checkEmailFieldExist() {
        this.elements.emailLabel()
            .scrollIntoView()
            .should('be.visible');
        this.elements.emailInput()
            .scrollIntoView()
            .should('be.visible');
    }

    checkCurrentAddressExist() {
        this.elements.currentAddressLabel()
            .scrollIntoView()
            .should('be.visible');
        this.elements.currentAddressTextArea()
            .should('be.visible');
    }

    checkPermanentAddressExist() {
        this.elements.permanentAddressLabel()
            .scrollIntoView()
            .should('be.visible');
        this.elements.permanentAddressTextArea()
            .should('be.visible');
    }

    checkSubmitButtonExist() {
        this.elements.submitButton()
            .scrollIntoView()
            .should('be.visible');
    }

    checkFullNameFieldEmpty() {
        this.elements.fullNameInput()
            .scrollIntoView()
            .should('be.empty');
    }

    checkEmailFieldEmpty() {
        this.elements.emailInput()
            .scrollIntoView()
            .should('be.empty');
    }

    checkCurrentAddressEmpty() {
        this.elements.currentAddressTextArea()
            .scrollIntoView()
            .should('be.empty');
    }

    checkPermanentAddressEmpty() {
        this.elements.permanentAddressTextArea()
            .scrollIntoView()
            .should('be.empty');
    }

    // * @param {string} fullName - The full name to be entered.
    enterFullName(fullName) {
        this.elements.fullNameInput()
            .type(fullName);
    }

    //* @param {string} email - The email to be entered.
    enterEmail(email) {
        this.elements.emailInput()
            .type(email);
    }

    //* @param {string} address - The address to be entered.
    enterCurrentAddress(address) {
        this.elements.currentAddressTextArea()
            .type(address);
    }

    //* @param {string} address - The address to be entered.
    enterPermanentAddress(address) {
        this.elements.permanentAddressTextArea()
            .type(address);
    }
    
    clickSubmitButton() {
        this.elements.submitButton()
            .click();
    }

    checkEmailErrorField() {
        this.elements.emailErrorInput()
            .should('be.visible')
    }

    checkOutputAreaNotExist() {
        this.elements.outputArea()
            .scrollIntoView()
            .should('not.be.visible')
    }

    checkOutputAreaExist() {
        this.elements.outputArea()
            .scrollIntoView()
            .should('be.visible')
    }

    //* @param {string} outputName - The expected full name in the output.
    checkOutputFullName(outputName) {
        this.elements.outputName()
            .scrollIntoView()
            .should('have.text', outputName)
    }

    //* @param {string} outputEmail - The expected email in the output.
    checkOutputEmail(outputEmail) {
        this.elements.outputEmail()
            .scrollIntoView()
            .should('have.text', outputEmail)
    }

    //* @param {string} outputCurrentAddress - The expected current address in the output.
    checkOutputCurrentAddress(outputCurrentAddress) {
        this.elements.outputCurrentAddress()
            .scrollIntoView()
            .should('have.text', outputCurrentAddress)
    }

    //* @param {string} outputPermanentAddress - The expected permanent address in the output.
    checkOutputPermanentAddress(outputPermanentAddress) {
        this.elements.outputPermanentAddress()
            .scrollIntoView()
            .should('have.text', outputPermanentAddress)
    }

    clearFullName() {
        this.elements.fullNameInput()
            .clear();
    }

    clearEmail() {
        this.elements.emailInput()
            .clear();
    }

    clearCurrentAddress() {
        this.elements.currentAddressTextArea()
            .clear();
    }

    clearPermanentAddress() {
        this.elements.permanentAddressTextArea()
            .clear();
    }
}
export default TextBoxTab;