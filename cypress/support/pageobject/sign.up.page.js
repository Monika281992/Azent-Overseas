class elements {

    getCreateAccount() {
        return cy.get(':nth-child(2) > .jss26 > .MuiTypography-root')
    }
    enterFirstName() {

        return cy.get('#firstName')
    }
    enterLastName() {

        return cy.get('#lastName')
    }
    enterEmail() {

        return cy.get('#email')
    }
    enterPhoneNumber (){

        return cy.get('#mobile')
    }
    enterpassword1() {

        return cy.get('#password-1')
    }
    enterpassword2() {

        return cy.get('#password-2')
    }
    getSignUp() {
        return cy.get('.jss55')
    }
    
    getErrorText() {

        return cy.get('.jss66 > .MuiTypography-root')
    }

}





export default elements;