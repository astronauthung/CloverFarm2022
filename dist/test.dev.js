"use strict";

var webdriver = require("selenium-webdriver");

var chrome = require("selenium-webdriver/chrome");
/** 
 * Set chrome command line options/switches
*/


var chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--js-flags=--expose-gc");
chromeOptions.addArguments("--enable-precise-memory-info");
chromeOptions.addArguments("--disable-popup-blocking");
chromeOptions.addArguments("--disable-default-apps");
chromeOptions.addArguments("--disable-infobars");
driver = new webdriver.Builder().forBrowser("chrome").setChromeOptions(chromeOptions).build();
driver.get("http://www.google.com");