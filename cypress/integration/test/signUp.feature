Feature: Sign up functionality



    Scenario: Verify the Sign up functionality
        Given I open Azent overseas website
        When click on Sign up button
        And  Enter First name
        And  Enter Last name
        And  Enter email address
        And  Enter mobile
        And  Enter Password
        And  Re-enter password
        And  click on the signup button
        Then Validate the sign up page
        