import { assert } from 'chai';
import HomePage from '../../page/HomePage.js';
import HelpPage from '../../page/HelpPage.js';

describe('Test Help page', function (){

    it('Open homepage, click on Help button and check is Help page opened', async function(){

        await HomePage.isPageOpen();
        await HomePage.clickOnHelpBtn();
        assert.isTrue(await HelpPage.isPageOpen(), 'Help page is not opened');
        await browser.pause(3000);
    });
});
