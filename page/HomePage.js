import BasePage from './BasePage.js';
import Button from '../elements/Button.js';
import Label from '../elements/Label.js';

const locatorHomePage = new Label('//android.widget.Button[contains(@resourse-id,"Save")]');
const locatorStatisticBtn = new Button('//android.widget.TextView[@content-desc="Statistics"]');
// const locatorNexageBtn = new Button('//*[contains(text(),"Nexage")]');

class HomePage extends BasePage {
    
    constructor () {
        super(locatorHomePage);
    };

    async clickOnStatisticBtn () {
        return locatorStatisticBtn.clickRegular();
    };
};

export default new HomePage();
