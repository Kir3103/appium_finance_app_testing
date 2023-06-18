import scriptData from '../utils/scriptData.js'
import configData from '../utils/configData.js';


export default class BaseElement {
    
    constructor(locator) {
        this.locator = locator;
    };
    
    async findElement () {
        return await $(this.locator).isDisplayed();
    };

    async findElements () {
        return await $$(this.locator).isDisplayed();
    };

    async waitForElement () {
        return await $(this.locator).waitForDisplayed({ timeout: configData.timeout });
    };

    async clickRegular () {
        return await $(this.locator).click();
    };

    async jsClick () {
        const element = await $(this.locator);
        return browser.execute(scriptData.jsClick, element);
    };

    async clickOnElementWithText(text){
        const elements = await $$(this.locator);
        for(let elem = 0; elem < elements.length; elem++){
            if(await elements[elem].getText() === text){
                return await elements[elem].click();
            };
        };
    };

    async scrollToElement(){
        const element = await $(this.locator);
        return browser.execute(scriptData.scrollToElement, element);
    };

    async jsGetText(){
        const element = await $(this.locator);
        return browser.execute(scriptData.text, element);
    };

    async getTextFromElem () {
        return await $(this.locator).getText();
    };

    async getTextFromElements(){
        const elements = await $$(this.locator);
        let textArray = [];
        for(let elem = 0; elem < elements.length; elem++){
            textArray.push(await elements[elem].getText());
        };
        return textArray;
    };

    async getAttributeFromElem(value) {
        return await $(this.locator).getAttribute(value);
    };

    async getTextFromElementCompareWait(text=null){
        return await browser.waitUntil(
            async () => (await $(this.locator).getText()) === text, {timeout: configData.timeout});
    };

    async elementIsExisting(){
        return await $(this.locator).isExisting();
    };

    async getLength(){
        return this.findElements().length;
    };
};