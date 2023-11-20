Feature: Dog CRUD Operations

  Scenario: Add a new dog
    Given I am on the Dog Shop page
    When I add a new dog with the breed "Labrador", nickname "Buddy" and price "800"
    Then I should see "Buddy" listed in the shop

