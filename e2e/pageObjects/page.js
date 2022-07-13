var { browser } = require('protractor');
const { acceptCookie } = require('./home.page');
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open(path) {
        await browser.waitForAngularEnabled(false);
        await browser.get(`https://www.sky.com/${path}`).then(async function () {
            await browser.driver.manage().window().maximize();
            await browser.sleep(10000)
            await browser.switchTo().frame(element(by.xpath("//iframe[@title='SP Consent Message']")))
        });
    }
}

