import BasePage from './BasePage.js';
import Button from '../elements/Button.js';
import Label from '../elements/Label.js';

const locatorHomePage = new Label('//android.widget.Button[contains(@resourse-id,"Save")]');
const locatorStatisticBtn = new Button('//android.widget.TextView[@content-desc="Statistics"]');
const locatorImportBtn = new Button('//android.widget.TextView[@content-desc="Import/Export"]');

class HomePage extends BasePage {
    
    constructor () {
        super(locatorHomePage);
    };

    async clickOnStatisticBtn () {
        return locatorStatisticBtn.clickRegular();
    };

    async clickOnImportBtn () {
        return locatorImportBtn.clickRegular();
    };

};

export default new HomePage();
