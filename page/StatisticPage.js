import BasePage from './BasePage.js';
import Label from '../elements/Label.js';

const locatorStatisticPage = new Label('//android.widget.Spinner[contains(@resourse-id,"ChartType")]');

class StatisticPage extends BasePage {
    
    constructor () {
        super(locatorStatisticPage);
    };

};

export default new StatisticPage();
