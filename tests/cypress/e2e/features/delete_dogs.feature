Feature: Delete dogs from the shop

  Scenario: Successfully delete a dog
    Given I have added a dog with the nickname "Orange"
    When I click the Delete button for "Orange"
    Then "Orange" should no longer be listed in the shop

  Scenario: Successfully delete an edited dog
    Given I have added a dog with the nickname "Apple"
    When I click the Edit button for "Apple"
    And I change the Price to "200"
    And I click the Update button
    Then I should see "Apple" listed in the shop with the new Price equal to "200"
    When I click the Delete button for "Apple"
    Then "Apple" should no longer be listed in the shop
