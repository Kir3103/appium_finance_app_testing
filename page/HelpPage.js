import BasePage from './BasePage.js';
import Label from '../elements/Label.js';

const locatorHelpPage = new Label('//android.widget.ListView[@resource-id="android:id/resolver_list"]');

class HelpPage extends BasePage {
    
    constructor () {
        super(locatorHelpPage);
    };

};

export default new HelpPage();
