import BasePage from './BasePage.js';
import Label from '../elements/Label.js';

const locatorImportPage = new Label('//*[contains(@resource-id,"Export")]');

class ImportPage extends BasePage {
    
    constructor () {
        super(locatorImportPage);
    };

};

export default new ImportPage();
