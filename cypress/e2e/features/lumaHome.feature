Feature: Luma Home

Scenario: Search a product
    Given the user goes to "Luma" page
    When Search the word "Hoodie" in the search bar
    Then The search page is open showing the title "Search results for: 'Hoodie'" 
    And the search returns all products with word "Hoodie" in the name 

Scenario: 
