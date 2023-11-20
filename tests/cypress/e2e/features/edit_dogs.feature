Feature: Edit dog details in the shop

  Scenario Outline: Successfully edit a dog's details
    Given I have added a dog with the nickname "Mango"
    When I click the Edit button for "Mango"
    And I change the <field> to "<newValue>"
    And I click the Update button
    Then I should see "Mango" listed in the shop with the new <field> equal to "<newValue>"

    Examples:
      | field | newValue    |
      | Price | 500         |
      | Breed | Breed123    |


  Scenario: Cancel editing a dog's details
    Given I am on the Dog Shop page
    When I add a new dog with the breed "Labrador", nickname "Kiwi123" and price "800"
    And I click the Edit button for "Kiwi123"
    And I change the Price to "300"
    And I click the Cancel button
    Then I should see "Kiwi123" listed in the shop with the original Price equal to "800"