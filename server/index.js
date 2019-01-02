const puppeteer = require('puppeteer');
const getCookies = require('./tools/cookies');
const cookie_objs = getCookies('_zap=1562f722-a1ed-49d0-917b-82fd0530023f; _xsrf=C8YUKr1dDvmEvpesc3SvOQEuvEqT05ZU; d_c0="AGAil3Q3ww6PTsPEIB1yDi4mWa7LIJtDo6Y=|1546398934"; q_c1=8d29911695d44cf18655edb7f9c73628|1546398943000|1546398943000; capsion_ticket="2|1:0|10:1546412371|14:capsion_ticket|44:ZWMyZmVmZWM3MDY0NGQyOTllMmM4MjZmNDE4YzRhMGM=|b9b7d1ec8d384f64ba6d6bc1d2c2cd2cf103cc9026ffa24b69cf6aa014d728ed"; z_c0="2|1:0|10:1546412374|4:z_c0|92:Mi4xUlo5ZUF3QUFBQUFBWUNLWGREZkREaVlBQUFCZ0FsVk5WcThaWFFBZTNIZTZ1SUhKQUQ2YW5qd1VwemNTdm51eTRR|329982925f020f6f91d5e0eb28f7405849ee5da70a6ee57f0c45bee325376345"; __gads=ID=64e770a98ddb25c7:T=1546412652:S=ALNI_MayWUdDuYA9lfBe4q_5nGLBYosRfw; tst=r; tgw_l7_route=4902c7c12bebebe28366186aba4ffcde');


(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: { width: 1280, height: 1280 },
        headless: false,
        devtools: true,
    });
    await browser.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36')
    const page = await browser.newPage();
    await page.goto('https://www.zhihu.com');
    await page.setCookie(...cookie_objs);
    const isComplete = await screenshot(page);
    console.log('complete:', isComplete)
    // await browser.close();
})();

async function screenshot(page) {
    try {
        for (let i = 0; i < 1; i++) {
            await page.goto('https://www.zhihu.com/people/zheng-dong-xiang-27/answers');
            await page.screenshot({ path: `imgs/zhihu_shot${i}.png` });
            sleep(1);
        }
        return true
    } catch (err) {
        console.log(err)
    }
}

async function sleep(second) {
    setTimeout(() => {
        return true
    }, second * 1000)
}