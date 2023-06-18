import { assert } from 'chai';
import HomePage from '../../page/HomePage.js';
import StatisticPage from '../../page/StatisticPage.js';
import testData from '../../utils/testData.js';

describe('Test Statistic page', function (){

    it('Open homepage, click on Statistic button and check is Statistic page opened', async function(){

        await HomePage.isPageOpen();
        await HomePage.clickOnStatisticBtn();
        assert.isTrue(await StatisticPage.isPageOpen(), 'Statistic page is not opened');
    });
});
