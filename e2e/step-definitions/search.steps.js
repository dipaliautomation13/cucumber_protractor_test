var { Given, When, Then } = require('cucumber');
var { expect } = require('chai');

const HomePage = require('../pageobjects/home.page');
const Common = require('../utils/common');
When(/^I search sky in the search bar$/, async () => {
    await HomePage.search();
    await Common.waitForElement(HomePage.sectionSearchEditorial, 5000);
});

Then(/^I should see editorial section$/, async () => {
    await HomePage.sectionSearchEditorial.isDisplayed().then(function (isVisible) {
        expect(isVisible).to.true;
    });
});