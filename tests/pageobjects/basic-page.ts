import { Page, Browser, BrowserContext, chromium } from '@playwright/test';
//import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";


export default class BasicPage {
    protected page:Page;
    protected browser: Browser;
    protected context: BrowserContext;
    
    constructor(){  }

    async initialize() {
    /* this.browser = await chromium.launch({
            headless: false
        });  */
        getEnv();
        this.browser = await invokeBrowser(); 
        this.context = await  this.browser.newContext();
        const page = await this.browser.newPage();
        this.page = page;       
      }      
       
    
 
    
     

    async goto(){
        await this.page.goto(''); 
    }

    async goBack() {
        await this.page.goBack();
        await this.page.waitForTimeout(2000); //workaround
    }

    async closeBrowser(){
        await this.browser.close();
    }

}