const { element, browser, by } = require('protractor');
const Page = require('./page');
const Common = require('../utils/common');

class SignInPage extends Page {

    get inputUsername() {
        return element(by.css('#username'));
    }

    get btnContinue() {
        return element(by.css('[data-testid="AUTHN__SUBMIT_BTN"]'));
    }

    get txtCreatePasswordTitle() {
        return element(by.css('[data-testid="CREATE_PASSWORD__TITLE"]'));
    }

    get frameSignIn() {
        return element(by.xpath('//iframe[@title="iFrame containing Sky Sign-In application"]'));
    }

    async enterUsername(name) {
        await Common.waitForElement(this.frameSignIn, 5000);
        await browser.switchTo().frame(this.frameSignIn.getWebElement())
        await this.inputUsername.sendKeys(name);
        await browser.sleep(1000);
    }

    async clickContinue() {
        await this.btnContinue.click();
    }
}

module.exports = new SignInPage();