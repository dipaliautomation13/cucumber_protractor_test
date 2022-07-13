var { Given, When, Then, After, Status, Before } = require('cucumber');
var { browser } = require('protractor');


const HomePage = require('../pageobjects/home.page');
const ShopPage = require('../pageobjects/shop.page');
const Common = require('../utils/common');



Given(/^I am on the (\w+) page$/, { timeout: 60 * 1000 }, async function (page) {
    if (page == 'home')
        page = '';
    await browser.waitForAngularEnabled(false);
    await browser.get("https://www.sky.com/" + page).then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(3000)
    });
    await browser.element(by.xpath("//iframe[@title='SP Consent Message']")).isPresent().then(function (present) {
        if (present) {
            browser.switchTo().frame(element(by.xpath("//iframe[@title='SP Consent Message']")).getWebElement())
            browser.findElement(by.xpath("//button[@title='Agree']")).click();
            browser.sleep(3000);
        }
    })

})


// After(async function (scenario, done) {
//     if (scenario.result.status === Status.FAILED) {
//         const screenshot = await browser.takeScreenshot();
//         this.attach(screenshot, "image/png");
//     } else {
//         done();
//     }
// });