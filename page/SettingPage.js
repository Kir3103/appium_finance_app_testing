import BasePage from './BasePage.js';
import Label from '../elements/Label.js';

const locatorSettingPage = new Label('//android.widget.LinearLayout[@content-desc="Settings, Navigate up"]');

class SettingPage extends BasePage {
    
    constructor () {
        super(locatorSettingPage);
    };

};

export default new SettingPage();
