import { test, expect, Locator, Page, FrameLocator } from '@playwright/test';
import BasicPage from "./basic-page";


class LuxeQualityMainPage extends BasicPage {
  public page : Page;  

  constructor() { 
    super();  
   }; 

  // Locators  

  private readonly headerLogo: string = 'div[class^="Header_logo__"]';
  private readonly headerContainer: string = 'div[class="Header_container__Tnhjz"]';
  private readonly headerContactUsButton : string = '//div[@class="Header_container__Tnhjz"]//button[contains(text(), "Contact us")]';
  private readonly contactUsBlockwrapper : string = 'div[class="ContactUsBlock_wrapper__ic9Bx"]';  
  private readonly contactUsContactsForm : string = 'div[class="ModuleContacts_container__Ngj8Z ModuleContacts_container_contacts__YjWUI"]';
  private readonly contactUsBookACall : string = 'div[class="ModuleCalendly_container__9cgwO"]';
  private readonly contactUsCalendlyForm : string = 'iframe[title="Calendly Scheduling Page"]';
  private readonly carouselFirstSlide : string = 'div[class="HeroSection_title_wrapper__CFHTe"]';
  private readonly carouselFirstSlideTitle : string = 'div[class="HeroSection_title_wrapper__CFHTe"] h1';
  private readonly carouselFirstSlideDescription : string = 'div[class="HeroSection_title_wrapper__CFHTe"] p';
  private readonly carouselFirstSlideButton : string = 'div[class="HeroSection_title_wrapper__CFHTe"] button';
  private readonly carouselSecondSlide : string = 'div[class="HeroSection_trial_wrapper___QQ_T"]';  
  private readonly carouselSecondSlideTitle : string = 'div[class="HeroSection_trial_wrapper___QQ_T"] h2';
  private readonly carouselSecondSlideDescription : string = 'div[class="HeroSection_trial_wrapper___QQ_T"] p';
  private readonly carouselSecondSlideButton : string = 'div[class="HeroSection_trial_wrapper___QQ_T"] button'; 
  private readonly carouselNextButton : string = 'div[class="slick-arrow slick-next"]';
  private readonly carouselPreviousButton : string = 'div[class="slick-arrow slick-prev"]';


  
  public getHeaderLogo(){
    return this.page.locator(this.headerLogo);
  }

  public getHeaderContainer(){
    return this.page.locator(this.headerContainer);
  }
  
     
  public getHeaderContactUsButton(){
    return this.page.locator(this.headerContactUsButton);
  } 
  
   public getContactUsBlockwrapper(){
    return this.page.locator(this.contactUsBlockwrapper);
  }  

  public getContactUsContactsForm(){
    return this.getContactUsBlockwrapper().locator(this.contactUsContactsForm);
  } 

  public getContactUsBookACall(){
    return this.getContactUsBlockwrapper().locator(this.contactUsBookACall);
  }  
   
  public getContactUsCalendlyForm(){
    return this.getContactUsBlockwrapper().frameLocator(this.contactUsCalendlyForm);
  }

  public getCarouselFirstSlide(){
    return this.page.locator(this.carouselFirstSlide);
  } 

  public getCarouselFirstSlideTitle(){
    return this.page.locator(this.carouselFirstSlideTitle);
  } 

  public getCarouselFirstSlideDescription(){
    return this.page.locator(this.carouselFirstSlideDescription);
  }

  public getCarouselFirstSlideButton(){    
    return this.page.locator(this.carouselFirstSlideButton);
  }  

  public getCarouselSecondSlide(){
    return this.page.locator(this.carouselSecondSlide);
  } 

  public getCarouselSecondSlideTitle(){
    return this.page.locator(this.carouselSecondSlideTitle);
  }

  public getCarouselSecondSlideDescription(){
    return this.page.locator(this.carouselSecondSlideDescription);
  } 

  public getCarouselSecondSlideButton(){
    return this.page.locator(this.carouselSecondSlideButton );
  }

  public getCarouselNextButton(){
    return this.page.locator(this.carouselNextButton);
  }  

  public getCarouselPreviousButton(){
    return this.page.locator(this.carouselPreviousButton);
  } 

  // Functions
  
  async clickLogo(){
    await this.getHeaderLogo().click();  
  }


  async clickContactUsButton(){
    await this.getHeaderContactUsButton().click(); 
  } 

  async clickOnNextButton(){
    await this.getCarouselNextButton().click(); 
  }

  async clickOnPreviousButton(){
    await this.getCarouselPreviousButton().click();
  } 
 
}
export default new LuxeQualityMainPage();