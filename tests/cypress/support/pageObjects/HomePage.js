class HomePage {
    visit() {
        cy.visit('/');
    }

    goToNewDogForm() {
        this.addDogButton().click();
    }

    getNewDogForm() {
        return cy.get('form');
    }

    addDog(breed, nick, price) {
        this.breedInput().type(breed);
        this.nickInput().type(nick);
        this.priceInput().type(price);
        this.clickSubmitButton();
    }

    addRandomDog(nick) {
        this.visit()
        this.breedInput().type(Math.random().toString(36).slice(2, 7));
        this.nickInput().type(nick);
        this.priceInput().type((Math.random() * 1000).toString());
        this.clickSubmitButton();
    }

    fillInputValue(input, value) {
        switch (input) {
            case 'Breed':
                this.breedInput().type(value);
                break;
            case 'Nick':
                this.nickInput().type(value);
                break;
            case 'Price':
                this.priceInput().type(value);
                break;
            case 'Image':
                this.imageInput().type(value);
                break;
        }
    }

    addDogButton() {
        return cy.get('button.add-dog');
    }

    breedInput() {
        return cy.get('input[name="breed"]');
    }

    nickInput() {
        return cy.get('input[name="nick"]');
    }

    priceInput() {
        return cy.get('input[name="price"]');
    }

    imageInput() {
        return cy.get('input[name="url"]');
    }

    getDogList() {
        return cy.get('.flex-large > table'); // replace with actual selector
    }

    getDogByNickname(nickname) {
        return this.getDogList().contains(nickname);
    }

    getDogName() {
        return cy.get('.dog-name'); // replace with actual selector
    }

    getDogBreed() {
        return cy.get('.dog-breed'); // replace with actual selector
    }

    getDogPrice() {
        return cy.get('.dog-price'); // replace with actual selector
    }

    clickSubmitButton() {
        return cy.contains('button', 'Add').click();
    }

    clickUpdateButton() {
        return cy.contains('button', 'Update').click();
    }

    clickCancelButton() {
        return cy.contains('button', 'Cancel').click();
    }

    clickEditAction(action) {
        switch (action) {
            case 'Cancel':
                this.clickCancelButton()
                break;
            case 'Update':
                this.clickUpdateButton()
                break;
            case 'Add':
                this.clickSubmitButton();
                break;
        }
    }

    performActionOnDog(action, nick) {
        this.getDogList().contains(nick).parent().contains(action).click();
    }

    editField(field, newValue) {
        switch (field) {
            case 'Breed':
                this.breedInput().type(newValue);
                break;
            case 'Price':
                this.priceInput().type(newValue);
                break;
            case 'Nick':
                this.nickInput().type(newValue);
                break;
        }
    }

    getField(nickname, field) {
        switch (field) {
            case 'Breed':
                return this.getDogByNickname(nickname).prev();
            case 'Price':
                return this.getDogByNickname(nickname).next();
            case 'Image':
                return this.getDogByNickname(nickname).next().next().children();
        }
    }

}

export default HomePage;