Feature: Luma Accounts

Scenario: Create an Account
    Given the user goes to "Luma" page
    When clicks on "Create an Account" button in the main menu
    And complete First Name: "Antonella", Last Name: "Morano", Email: "anto_m58@hotmail.com", Pasword: "PDprHkegZs@QeG2", Password repetition: "PDprHkegZs@QeG2"
    And clicks on "Create an Account" button
    Then The "My Account" page is displayed, showing "Thank you for registering with Main Website Store." message
    And showing the Account Information section with Name: "Antonella", Lastname:"Morano" and Email: "anto_m58@hotmail.com", Edit and Change Password buttons 
    And in the corner of the page appears the menu "Welcome, Antonella Morano!"

Scenario: Create an Account with an existing email
    Given the user goes to "Luma" page
    When clicks on "Create an Account" button in the main menu
    And complete First Name: "Antonella", Last Name: "Morano", Email: "anto_m5@hotmail.com", Pasword: "PDprHkegZs@QeG2", Password repetition: "PDprHkegZs@QeG2"
    And clicks on "Create an Account" button
    Then the following message appears: "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account."

Scenario: Create an account without the required fields
    Given the user goes to "Luma" page
    When clicks on "Create an Account" button in the main menu
    And clicks on "Create an Account" button
    Then "This is a required field." appears for First Name, Last Name, Email, Password amd Confir Password fields

Scenario: Log in with a correct account
    Given the user goes to "Luma" page
    When clicks on Sign In button in the main menu
    And complete Email: "anto_m57@hotmail.com", Password: "PDprHkegZs@QeG2" and clicks on Sign In button
    Then in the corner of the page appears the menu "Welcome, Antonella Morano!"

Scenario: Log in with an incorrect account
    Given the user goes to "Luma" page
    When clicks on Sign In button in the main menu
    And complete Email: "anto_m2023@hotmail.com", Password: "PDprHkegZs@QeG2" and clicks on Sign In button
    Then the following message appears: "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."