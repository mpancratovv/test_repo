Feature: Validate input fields when adding a new dog

  Scenario: Attempt to add a dog with alphabetic characters in the price field
    Given I am on the Dog Shop page
    When I fill in the Price field with "--7"
    And I click the Add button
   # Then I should see an error message "Please enter a number"

  Scenario: Attempt to add a dog with excessively long breed
    Given I am on the Dog Shop page
    When I fill in the Breed field with "ThisBreedNameIsWayTooLongForAnyDog"
    And I click the Add button
   # Then I should see an error message "Breed must be less than 20 characters" defect - able to enter an infinite breed
