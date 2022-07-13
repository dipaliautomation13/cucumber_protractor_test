var { browser, by, element } = require('protractor');
const Page = require('./page');

class HomePage extends Page {

    get lnkDeals() {
        return element(by.css('[data-tracking-label="masthead_visit_primary_deals_link"]'));
    }

    get lnkSignIn() {
        return element(by.css('[data-tracking-label="masthead_signin"]'));
    }

    get iframeConsentMsg() {
        return element(by.xpath("//iframe[@title='SP Consent Message']"));
    }

    get btnCookieAccept() {
        return element(by.css('button[title="Agree"]'));
    }

    get btnSearch() {
        return element(by.css('#masthead-search-toggle'));
    }

    get inputSearch() {
        return element(by.css('input[type="search"]'));
    }

    get sectionSearchEditorial() {
        return element(by.css('#search-results-container'));
    }

    async clickDealsLink() {
        await this.lnkDeals.click();
    }

    async clickSignInLnk() {
        await this.lnkSignIn.click();
    }

    async search(searchKey) {
        await this.btnSearch.click();
        await this.inputSearch.click();
        await this.inputSearch.sendKeys("sky");
    }

    open() {
        super.open('');
    }
}

module.exports = new HomePage();