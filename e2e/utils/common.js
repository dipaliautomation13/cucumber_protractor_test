var { expect } = require('chai');
var { browser } = require('protractor');
var EC = protractor.ExpectedConditions;
class Common {

    async verifyCurrentUrl(url) {
        expect(await browser.getCurrentUrl()).to.equal(url);
    }
    async waitForElement(element, time) {
        await browser.wait(EC.presenceOf(element), time);
        //expect(element.isPresent()).to.true;
    }
}

module.exports = new Common();