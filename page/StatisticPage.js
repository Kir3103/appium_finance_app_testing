import BasePage from './BasePage.js';
import Label from '../elements/Label.js';

const locatorStatisticPage = new Label('//*[contains(@resource-id,"ChartType")]');

class StatisticPage extends BasePage {
    
    constructor () {
        super(locatorStatisticPage);
    };

};

export default new StatisticPage();
