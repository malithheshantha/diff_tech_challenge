/// <reference types="cypress" />



class HomePage{

open(){
    
    cy.visit('https://devexpress.github.io/testcafe/example/')
}

enteringName(){

 return cy.get('input[data-testid="name-input"]');

}

clickPopulate(){


    return cy.get('input[data-testid="populate-button"]');
}

ConfirmingPopup(){

 return cy.on('window:confirm',function(confirmText){

    return(true)

 })

}

selectingFeatures1(){

   return cy.get('input[data-testid="reusing-js-code-checkbox"]');

}

selectingFeatures2(){

   return cy.get('input[data-testid="parallel-testing-checkbox"]');

}

selectingOS(){


    return cy.get('input[data-testid="windows-radio"]');
}

selectingDropDown(){

    return cy.get('select[data-testid="preferred-interface-select"]');

}

increasingTestScale1(){

   return cy.get('input[data-testid="tried-testcafe-checkbox"]');

}

increasingTestScale2(){
    
    return cy.get('span[class="ui-slider-handle ui-corner-all ui-state-default"]');


}

EnteringComment(){


   return  cy.get('textarea[data-testid="comments-area"]');
}

Clicksubmit(){

   return cy.get('button[data-testid="submit-button"]');
}

FinalValidation(){

   return cy.get('h1[data-testid="thank-you-header"]');

}



}

export default new HomePage()