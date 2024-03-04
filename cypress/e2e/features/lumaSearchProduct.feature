Feature: Luma Search a product

Scenario: Search a product
    Given the user goes to "Luma" page
    When Search the word "Hoodie" in the search bar
    Then The search page is open showing the title "Search results for: 'Hoodie'" 
    And the search returns all products with word "Hoodie" in the name 

Scenario: Search an inexisting product
    Given the user goes to "Luma" page
    When Search the word "asasasas" in the search bar
    Then The search page is open showing the title "Search results for: 'asasasas'" 
    And The search page is open showing a "Your search returned no results." message