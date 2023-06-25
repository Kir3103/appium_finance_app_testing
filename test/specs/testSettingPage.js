import { assert } from 'chai';
import HomePage from '../../page/HomePage.js';
import SettingPage from '../../page/SettingPage.js';

describe('Test Setting page', function (){

    it('Open homepage, click on Settings button and check is Setting page opened', async function(){

        await HomePage.isPageOpen();
        await HomePage.clickOnSettingBtn();
        assert.isTrue(await SettingPage.isPageOpen(), 'Setting page is not opened');
    });
});
