/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import elements from '../../../support/pageobject/sign.up.page';

const Elements = new elements()

Given('I open Azent overseas website', function () {

    cy.visit('https://staging-auth.azent.com/login')
})
When('click on Sign up button', function () {

    Elements.getCreateAccount().click()
})
And('Enter First name', function () {

    Elements.enterFirstName().type(this.data.firstName)
})
And('Enter Last name', function () {

    Elements.enterLastName().type(this.data.lastName)
})
And('Enter email address', function () {
    Elements.enterEmail().type(this.data.emailId)

})
And('Enter mobile', function () {

    Elements.enterPhoneNumber().type(this.data.mobile)
})
And('Enter Password', function () {

    Elements.enterpassword1().type(this.data.password1)
})
And('Re-enter password', function () {
    Elements.enterpassword2().type(this.data.password1)

})
And('click on the signup button', function () {
    Elements.getSignUp().click()

})
Then('Validate the sign up page', function () {
    
//since we are not able to sign up just validating on the error message
Elements.getErrorText().should('have.text','Some error occured, Please check your network settings and try again.')

})
