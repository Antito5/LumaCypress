Feature: Luma Add to cart
Scenario: Add one product to cart
    Given the user goes to "Luma" page
    When Search the word "Hoodie" in the search bar
    And Select "Selene Yoga Hoodie" product
    And Select size "M"
    And select the color "Purple"
    And select "Add to Cart" button
   Then Appears the "You added Selene Yoga Hoodie to your shopping cart." message
   And the cart icon shows "1" label
   And The cart modal shows the "Selene Yoga Hoodie" product 
   And The cart modal shows the "Proceed to Checkout" button