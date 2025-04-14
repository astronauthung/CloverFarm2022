const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Contact Form Test', function () {
    let driver;

    // Khởi tạo WebDriver
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Đóng WebDriver sau khi tất cả các test kết thúc
    after(async function () {
        await driver.quit();
    });

    it('should submit contact form and send confirmation email', async function () {
        // Điều hướng tới trang liên hệ
        await driver.get('http://localhost:3000/contact'); // Thay bằng đường dẫn thực tế

        // Tìm các trường nhập liệu và điền thông tin
        await driver.findElement(By.name('contact_name')).sendKeys('John Doe');
        await driver.findElement(By.name('contact_mail')).sendKeys('johndoe@example.com');
        await driver.findElement(By.name('contact_message')).sendKeys('I need help with my order.');

        // Gửi form
        await driver.findElement(By.css('form')).submit();

        // Đợi tới khi trang điều hướng xong (hoặc email gửi thành công)
        await driver.wait(until.urlIs('http://localhost:3000/contact'), 10000); // Đường dẫn sau khi gửi thành công

        // Kiểm tra xem điều hướng có thành công không
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://localhost:3000/contact');

        // Kiểm tra thông báo xác nhận (có thể là một thẻ có ID 'success-message')
        const successMessage = await driver.findElement(By.id('success-message')).getText();
        assert.strictEqual(successMessage, 'Thank you for contacting us. We will get back to you soon.');
    });
});