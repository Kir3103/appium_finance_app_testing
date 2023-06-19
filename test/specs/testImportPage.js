import { assert } from 'chai';
import HomePage from '../../page/HomePage.js';
import ImportPage from '../../page/ImportPage.js';

describe('Test Import/Export page', function (){

    it('Open homepage, click on Import/Export button and check is Import/Export page opened', async function(){

        await HomePage.isPageOpen();
        await HomePage.clickOnImportBtn();
        assert.isTrue(await ImportPage.isPageOpen(), 'Import page is not opened');
    });
});
