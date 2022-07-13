var { Given, When, Then } = require('cucumber');
var { expect } = require('chai');
const HomePage = require('../pageobjects/home.page');
const ShopPage = require('../pageobjects/shop.page');
const SignInPage = require('../pageobjects/signIn.page');
const Common = require('../utils/common');
const { browser } = require('protractor');

const pages = {
    home: HomePage
}

var expectedPrice = ['£26', '£46', '£38'];
const offersOnPage = '6';

When(/^I navigate to Deals$/, { timeout: 60 * 1000 }, async () => {
    await HomePage.clickDealsLink();
});

Then(/^I should be on the Deals page$/, async () => {
    expect(await ShopPage.getDealsPageHeader()).to.equal("Sky Deals");
    await Common.verifyCurrentUrl("https://www.sky.com/deals");
});

When(/^I try to sign in with invalid credentials$/, { timeout: 60 * 1000 }, async function () {
    await HomePage.clickSignInLnk();
    await SignInPage.enterUsername("invalid@gmail.com");
    await SignInPage.clickContinue();
    await browser.sleep(1000);
});

Then(/^I should see a box with the text Create your My Sky password$/, { timeout: 60 * 1000 }, async () => {
    await Common.waitForElement(SignInPage.txtCreatePasswordTitle, 5000);
    expect(await SignInPage.txtCreatePasswordTitle.getText()).to.equal("Create your My Sky password");
});

Then(/^I see a list of deals with a price to it$/, { timeout: 60 * 1000 }, async () => {
    await ShopPage.clickSkyQ();
    await browser.sleep(1000);
    await Common.waitForElement(ShopPage.listOfDeals, 5000);
    expect(ShopPage.listOfDeals).to.exist;
    var prices = await ShopPage.listOfDealPrices.getText();
    var count = 0;
    try {
        prices.forEach(price => {
            expect(price.split(',')[1].trim()).to.equal(expectedPrice[count])
            count++;
        })
    } catch (err) {
        console.log("err" + err);
        expect(count).to.equal(3);
    }
});
