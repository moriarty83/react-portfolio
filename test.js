const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    console.log("hello test")
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        
      await driver.get('http://localhost:3000');
      await driver.findElement(By.className("main-link")).click()
    } finally {
      await driver.quit();
    }
  })();

