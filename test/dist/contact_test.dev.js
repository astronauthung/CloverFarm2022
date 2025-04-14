"use strict";

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until;

var assert = require('assert');

describe('Contact Form Test', function () {
  var driver; // Khởi tạo WebDriver

  before(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(new Builder().forBrowser('chrome').build());

          case 2:
            driver = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // Đóng WebDriver sau khi tất cả các test kết thúc

  after(function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(driver.quit());

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  it('should submit contact form and send confirmation email', function _callee3() {
    var currentUrl, successMessage;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(driver.get('http://localhost:3000/contact'));

          case 2:
            _context3.next = 4;
            return regeneratorRuntime.awrap(driver.findElement(By.name('contact_name')).sendKeys('John Doe'));

          case 4:
            _context3.next = 6;
            return regeneratorRuntime.awrap(driver.findElement(By.name('contact_mail')).sendKeys('johndoe@example.com'));

          case 6:
            _context3.next = 8;
            return regeneratorRuntime.awrap(driver.findElement(By.name('contact_message')).sendKeys('I need help with my order.'));

          case 8:
            _context3.next = 10;
            return regeneratorRuntime.awrap(driver.findElement(By.css('form')).submit());

          case 10:
            _context3.next = 12;
            return regeneratorRuntime.awrap(driver.wait(until.urlIs('http://localhost:3000/contact'), 10000));

          case 12:
            _context3.next = 14;
            return regeneratorRuntime.awrap(driver.getCurrentUrl());

          case 14:
            currentUrl = _context3.sent;
            assert.strictEqual(currentUrl, 'http://localhost:3000/contact'); // Kiểm tra thông báo xác nhận (có thể là một thẻ có ID 'success-message')

            _context3.next = 18;
            return regeneratorRuntime.awrap(driver.findElement(By.id('success-message')).getText());

          case 18:
            successMessage = _context3.sent;
            assert.strictEqual(successMessage, 'Thank you for contacting us. We will get back to you soon.');

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
});