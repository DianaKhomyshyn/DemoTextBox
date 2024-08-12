import { formData } from '../fixtures/formData.json'

class TextBoxTab {

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

    enterFullName(fullName) {
        this.elements.fullNameInput()
            .type(fullName);
    }

    enterEmail(email) {
        this.elements.emailInput()
            .type(email);
    }

    enterCurrentAddress(address) {
        this.elements.currentAddressTextArea()
            .type(address);
    }

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

    checkOutputFullName(outputName) {
        this.elements.outputName()
            .scrollIntoView()
            .should('have.text', outputName)
    }

    checkOutputEmail(outputEmail) {
        this.elements.outputEmail()
            .scrollIntoView()
            .should('have.text', outputEmail)
    }

    checkOutputCurrentAddress(outputCurrentAddress) {
        this.elements.outputCurrentAddress()
            .scrollIntoView()
            .should('have.text', outputCurrentAddress)
    }

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