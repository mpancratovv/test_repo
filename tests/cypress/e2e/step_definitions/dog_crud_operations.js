import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pageObjects/HomePage';

const homePage = new HomePage();

defineParameterType({
    name: "action",
    regexp: /Delete|Edit/
});

defineParameterType({
    name: "field",
    regexp: /Breed|Nick|Price|Image/
});

defineParameterType({
    name: "editAction",
    regexp: /Update|Cancel|Add/
});

defineParameterType({
    name: "valueType",
    regexp: /original|new/
});


Given('I am on the Dog Shop page', () => {
    homePage.visit();
});

When('I add a new dog with the breed {string}, nickname {string} and price {string}', (breed, nickname, price) => {
    homePage.addDog(breed, nickname, price);
});

Given('I have added a dog with the nickname {string}', (nickname) => {
    homePage.addRandomDog(nickname);
});

When('I fill in the {word} field with {string}', (input, value) => {
    homePage.fillInputValue(input, value);
});

Then('I should see {string} listed in the shop', (nickname) => {
    homePage.getDogList().should('contain', nickname);
});

Then('I should see {string} listed in the shop with the breed {string}, price {string}, and image {string}', (nickname, breed, price, imageUrl) => {
    homePage.getDogList().should('contain', nickname);

    homePage.getField(nickname, 'Breed').should('contain', breed);
    homePage.getField(nickname, 'Price').should('contain', price);
    homePage.getField(nickname, 'Image').should('have.attr', 'src', imageUrl);
});

When('I click the {action} button for {string}', (action, nickname) => {
    homePage.performActionOnDog(action, nickname);
});

Then('{string} should no longer be listed in the shop', (nickname) => {
    homePage.getDogList().should('not.contain', nickname);
});

When('I change the {word} to {string}', (field, value) => {
    homePage.editField(field, value);
});


Then('I should see {string} listed in the shop with the {valueType} {field} equal to {string}', (nickname, valueType, field, newValue) => {
    homePage.getField(nickname, field).should('contain', newValue);
});

When('I click the {editAction} button', (editAction) => {
    homePage.clickEditAction(editAction);
});

Then('I should see an error message {string}', (errorMessage) => {
    homePage.getNewDogForm().should('contain', errorMessage);
});


