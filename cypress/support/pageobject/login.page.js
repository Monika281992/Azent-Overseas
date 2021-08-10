class elements {

    getEnterEmailid() {
        return cy.get('#username')
    }
    getEnterPassword() {
        return cy.get('#password')
    }
    getLoginButton() {
        return cy.get(':nth-child(4) > .MuiButton-label')
    }
    }
    
    

   


export default elements;