import BasePage from './BasePage.js';

const locatorHomePage = new Label('//*[contains(text(),"projects")]', 'HomePage');
const locatorVersion = new Label('//span[contains(text(),"Version")]', 'Version test');
const locatorNexageBtn = new Button('//*[contains(text(),"Nexage")]', 'Nexage button');

class HomePage extends BasePage {
    
    constructor () {
        super(locatorHomePage, 'Homepage projects');
    };

    async getVersionTest () {
        return locatorVersion.getTextFromElem();
    };

    async clickNexageBtn(){
        return locatorNexageBtn.clickRegular();
    };
};

export default new HomePage();
