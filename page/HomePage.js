import BasePage from './BasePage.js';
import Button from '../elements/Button.js';
import Label from '../elements/Label.js';

const locatorHomePage = new Label('//android.widget.Button[contains(@resourse-id,"Save")]');
const locatorStatisticBtn = new Button('//android.widget.TextView[@content-desc="Statistics"]');
const locatorImportBtn = new Button('//android.widget.TextView[@content-desc="Import/Export"]');
const locatorSettingBtn = new Button('//android.widget.TextView[@content-desc="Settings"]');
const locatorHelpBtn = new Button('//android.widget.TextView[@content-desc="Help"]');

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

    async clickOnSettingBtn () {
        return locatorSettingBtn.clickRegular();
    };

    async clickOnHelpBtn () {
        return locatorHelpBtn.clickRegular();
    };

};

export default new HomePage();
