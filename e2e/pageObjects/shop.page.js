const { element, By, by, browser } = require('protractor');
const Page = require('./page');

class ShopPage extends Page {

    get btnDeals() {
        return element(by.css('[data-tracking-label="masthead_visit_primary_deals_link"]'));
    }

    get txtHeading() {
        return element(by.css('#deals-primary-heading'));
    }

    get btnSkyQ() {
        return element(by.xpath('//span[text()="Sky Q"]'));
    }

    get listOfDeals() {
        return element.all(by.xpath("//*[contains(@data-content-id,'offer')]"));
    }

    get listOfDealPrices() {
        return element.all(by.xpath("//*[contains(@data-content-id,'offer')]//span[contains(@id,'price')]"));

    }

    async clickSkyQ() {
        await this.btnSkyQ.click();
    }

    async getDealsPageHeader() {
        return await this.txtHeading.getText();
    }

}

module.exports = new ShopPage();