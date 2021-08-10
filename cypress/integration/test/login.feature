Feature: Login functionality 



    Scenario: Verify the login functionality
        Given I open Azent overseas website
        When I enter email id
        When I enter password
        When I click on login button 
        Then Validate if we get the successful login screen
        