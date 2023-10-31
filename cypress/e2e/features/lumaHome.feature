Feature: Luma Home

Scenario: Search a product
    Given the user goes to "Luma" page
    When Search the word "Hoodie" in the search bar
    Then the search returns all products with word "Hoodie" in the name 