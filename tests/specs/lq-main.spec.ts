import { test, expect } from '@playwright/test';
import luxeQualityMainPage from "../pageobjects/lq-main-page";

test.describe('LQ main page', async () => {    

    test.beforeAll(async()=>{
       await luxeQualityMainPage.initialize(); 
       await luxeQualityMainPage.goto();
       await expect(luxeQualityMainPage.page).toHaveURL(/\//);
    }) 

    test('main', async () => {     

        await test.step('"CONTACT US" button displayed in the header', async () => {      
            await expect(luxeQualityMainPage.getHeaderContactUsButton()).toBeVisible();
            await expect(luxeQualityMainPage.getHeaderContactUsButton()).toHaveCSS('background-image', 'linear-gradient(rgb(95, 16, 183), rgb(58, 204, 178), rgb(95, 16, 183))');  // need to add conventer from (#5f10b7,#3accb2,#5f10b7)  hex 
            await expect(luxeQualityMainPage.getHeaderContactUsButton()).toContainText('Contact us');
            await expect(luxeQualityMainPage.getHeaderContactUsButton()).toHaveCSS('text-transform', 'uppercase');
            


        });

        await test.step('Click [CONTACT US] button in header', async () => {
            await luxeQualityMainPage.clickContactUsButton();
            await expect(luxeQualityMainPage.page).toHaveURL(/.*contacts/);
            await expect(luxeQualityMainPage.getContactUsContactsForm()).toBeVisible();
            await expect(luxeQualityMainPage.getContactUsBookACall()).toBeVisible();
            await test.setTimeout(60000);   // Make changes
            await expect(luxeQualityMainPage.getContactUsCalendlyForm().getByText('Select a Day')).toBeVisible();

            await luxeQualityMainPage.goBack(); // ======
        });
        
        await test.step('Verify that 2 banners are displayed with CTA(call to action) buttons and user is able to move banners by click on [<] [>] buttons', async () => {
        // await luxeQualityMainPage.expectFirstSlide();
            await  await expect(luxeQualityMainPage.getCarouselFirstSlide()).toBeVisible();
            await expect(luxeQualityMainPage.getCarouselFirstSlideTitle()).toHaveText(/Software Testing company/);
            await expect(luxeQualityMainPage.getCarouselFirstSlideTitle()).toHaveCSS('text-transform', 'uppercase');
        // await expect(this.carouselFirstSlideDescription).toHaveText(/Software Testing company We provide QA, QC, and testing.Our experience - your profit/);
            await expect(luxeQualityMainPage.getCarouselFirstSlideButton()).toContainText('CONTACT US');
            await expect(luxeQualityMainPage.getCarouselFirstSlideButton()).toHaveCSS('text-transform', 'uppercase'); 
            
            await luxeQualityMainPage.clickOnNextButton();
            //await luxeQualityMainPage.expectSecondSlide();

            await expect(luxeQualityMainPage.getCarouselSecondSlide()).toBeVisible();
            await expect(luxeQualityMainPage.getCarouselSecondSlideTitle()).toHaveText(/Luxe Quality Provides for 40 hours of free testing/);
            await expect(luxeQualityMainPage.getCarouselSecondSlideTitle()).toHaveCSS('text-transform', 'uppercase');
            await expect(luxeQualityMainPage.getCarouselSecondSlideDescription()).toHaveText(/We have a special offer tailored for potential long-term customers who are interested in starting a pilot project. We are offering our software testing services for free for the first 40 hours./);
            await expect(luxeQualityMainPage.getCarouselSecondSlideButton()).toContainText('START FREE TRIAL');
            await expect(luxeQualityMainPage.getCarouselSecondSlideButton()).toHaveCSS('text-transform', 'uppercase'); 


            await luxeQualityMainPage.clickOnPreviousButton();
            //await luxeQualityMainPage.expectFirstSlide();
            await  await expect(luxeQualityMainPage.getCarouselFirstSlide()).toBeVisible();
            await expect(luxeQualityMainPage.getCarouselFirstSlideTitle()).toHaveText(/Software Testing company/);
            await expect(luxeQualityMainPage.getCarouselFirstSlideTitle()).toHaveCSS('text-transform', 'uppercase');
        // await expect(this.carouselFirstSlideDescription).toHaveText(/Software Testing company We provide QA, QC, and testing.Our experience - your profit/);
            await expect(luxeQualityMainPage.getCarouselFirstSlideButton()).toContainText('CONTACT US');
            await expect(luxeQualityMainPage.getCarouselFirstSlideButton()).toHaveCSS('text-transform', 'uppercase'); 
        });

    });

    test.afterAll( async()=>{
        luxeQualityMainPage.closeBrowser();
    })
})