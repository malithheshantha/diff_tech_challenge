/// <reference types="cypress" />

import HomePage from "../Page Objects/HomePage";






describe('Excercise',() =>{

    it('test one',()=>{

    HomePage.open();
    HomePage.enteringName().type('Test');
    HomePage.clickPopulate().click();
    HomePage.ConfirmingPopup();
    HomePage.selectingFeatures1().check();
    HomePage.selectingFeatures2().check();
    HomePage.selectingOS().check();
    HomePage.selectingDropDown().select('JavaScript API');
    HomePage.increasingTestScale1().check();
    HomePage.increasingTestScale2().invoke("attr","style","left: 44.4444%").trigger("change");
    HomePage.EnteringComment().type('Please let us know what you think');
    HomePage.Clicksubmit().click();
    HomePage.FinalValidation().should("contain.text","Thank you, Peter Parker");
    
     
    
    

   })


})