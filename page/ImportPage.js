import BasePage from './BasePage.js';
import Label from '../elements/Label.js';

const locatorImportPage = new Label('//android.widget.Button[contains(@resourse-id,"Export")]');

class ImportPage extends BasePage {
    
    constructor () {
        super(locatorImportPage);
    };

};

export default new ImportPage();
