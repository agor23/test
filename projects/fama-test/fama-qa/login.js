module.exports = ( async() => {

  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://staging.1push.live', {waitUntil: 'networkidle2'});

  // email input
  await page.waitForSelector("[name='email']");
  await page.type("[name='email']", 'alexandru@oriel.io');

  // password input
  await page.keyboard.down("Tab");
  await page.type("[name='password']", 'parola');

  // login
  await page.waitForSelector(".MuiButton-label")
  await page.click(".MuiButton-label")

  // select hostname
  await page.waitForSelector('#select-hostnames');
  await page.click('#select-hostnames')
  await page.waitForSelector("#menu-hostnames > div > ul:nth-child(1) li:nth-child(1)");
  // await page.click("#menu-hostnames > div > ul:nth-child(1) li:nth-child(1)");
  await page.type('#menu-hostnames', 'static-dev', {delay:20})
  await page.keyboard.press('Enter');
  await page.keyboard.press('Escape');

  // set notification title 
  await page.waitForSelector("[name='title']");
  await page.type("[name='title']", 'buhu', {delay: 20})

  //  set notification body
  await page.waitForSelector("[name='body']");
  await page.type("[name='body']", 'te-ai speriat', {delay: 20})


// let button = await page.$eval('.MuiButton-label', e => e.innerText);
// if(button == "Send")  {

//   await page.click('..MuiButton-label')
// }


await page.evaluate(() => {

  let button = document.querySelectorAll('.MuiButton-label').innerText='Send';
  console.log(button, 234);
})

  // save the notification as draft

  await waitFor(5000);
  await browser.close();
  
})()