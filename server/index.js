// const Koa = require('koa');
// const app = new Koa();
//
//
// app.use(async (ctx,next)=>{
//     ctx.body='dashbord';
// });
//
// app.listen(8899);

const puppeteer = require('puppeteer-cn');
(async () => {
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('https://y.qq.com');
    await page.waitForSelector('body');
    await page.screenshot({path: 'yqq.png',fullPage:true});
    browser.close();
})();

