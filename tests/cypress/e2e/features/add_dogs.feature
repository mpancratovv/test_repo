Feature: Add new dogs to the shop

  Scenario Outline: Successfully add a new dog
    Given I am on the Dog Shop page
    When I fill in the Breed field with "<Breed>"
    And I fill in the Nick field with "<Nick>"
    And I fill in the Price field with "<Price>"
    And I fill in the Image field with "<ImageURL>"
    And I click the Add button
    Then I should see "<Nick>" listed in the shop with the breed "<Breed>", price "<Price>", and image "<ImageURL>"

    Examples:
      | Breed   | Nick | Price | ImageURL                                                                                            |
      | Akita   | As   | 100   | https://dogtime.com/wp-content/uploads/sites/12/2018/10/GettyImages-495873443-e1691248374213.jpg    |
      | Alaskan | Boko | 200   | https://dogtime.com/wp-content/uploads/sites/12/2023/08/GettyImages-1435474615-1-e1691930474231.jpg |

  Scenario: Add a new dog without providing breed
    Given I am on the Dog Shop page
    When I fill in the Nick field with "Buddy"
    And I fill in the Price field with "800"
    And I click the Add button
  #  Then I should see an error message "Breed is required" - defect, no error message is displayed

  Scenario: Add a new dog without providing nickname
    Given I am on the Dog Shop page
    When I fill in the Breed field with "Labrador"
    And I fill in the Price field with "800"
    And I click the Add button
   # Then I should see an error message "Nickname is required" - defect, no error message is displayed

  Scenario: Add a new dog with negative price
    Given I am on the Dog Shop page
    When I fill in the Breed field with "Labrador"
    And I fill in the Nick field with "Buddy"
    And I fill in the Price field with "-800"
    And I click the Add button
   # Then I should see an error message "Price could not be negative" defect - able to add negative price ex. -700

