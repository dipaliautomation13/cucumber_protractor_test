"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var { reporter } = require('cucumber-html-report');
exports.config = {

    waitforTimeout: 10000,
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./e2e/features/*.feature'],
    cucumberOpts: {
        format: 'json:./cucumberreports.json',

        onComplete: () => {
            //var reporter = require('cucumber-html-reporter');

            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreports.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome 85.0.4183.83",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };

            reporter.generate(options);

        },
        require: [
            './e2e/step-definitions/shop.steps.js', './e2e/step-definitions/common.steps.js', './e2e/step-definitions/search.steps.js'
        ]
    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            openReportInBrowser: true,
            pageTitle: "Project Report",
            pageFooter: "<div><p>Protractor with cucumber</p></div>",
            customData: {
                title: 'Protractor Cucucmber Report',
                data: [
                    { label: 'Project', value: 'Protractor with Cucumber test' },
                ]
            }
        },

    }]

};


