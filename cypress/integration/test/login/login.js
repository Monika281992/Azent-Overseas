/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import elements from '../../../support/pageobject/login.page';

const Elements = new elements()

Given('I open Azent overseas website', function () {

    cy.visit('https://staging-auth.azent.com/login')
})
When('I enter email id', function () {
    Elements.getEnterEmailid().type(this.data.email)
})
When('I enter password', function () {
    Elements.getEnterPassword().type(this.data.password)
})
When('I click on login button', function () {

    Elements.getLoginButton().click()
})
When('Validate if we get the successful login screen', function () {

    // Assertion on the basis of Welcome text
    //Elements.getWelcomeText().should('have.text','Welcome text')

    // we can assert on the api call as well
    cy.request({
        method: 'POST',
        url: 'https://staging-website.azent.com/'


    }).then((Response) => {

        expect(Response).to.have.property('status', 200)
    })
})