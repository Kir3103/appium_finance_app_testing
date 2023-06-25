import { assert } from 'chai';
import HomePage from '../../page/HomePage.js';
import generateTrueMessage from '../../utils/generateTrueMessage.js';
import generateTrueNumb from '../../utils/generateTrueNumb.js';

describe('Test Fill positive value', function (){

    it('Open homepage, fill positive value, click button "Save" and check value on homepage', async function(){

        await HomePage.isPageOpen();
        const positiveValueExpense = generateTrueMessage();
        await HomePage.fillExpenseName(positiveValueExpense);
        const positiveValueNumb = generateTrueNumb();
        await HomePage.fillExpenseAmount(positiveValueNumb);
        const positiveValueLabel = generateTrueMessage();
        await HomePage.fillExpenseLabel(positiveValueLabel);
        const arrayWithValuesForFilling = [positiveValueExpense, positiveValueNumb, positiveValueLabel];
        const resultAfterFilling = await HomePage.getTextFromField();
        assert.deepEqual(resultAfterFilling, arrayWithValuesForFilling, 'Values after filling are different');

        await HomePage.clickOnSaveBtn();
        assert.isTrue(await HomePage.isStatisticExist(), 'Statistic is not exist');

        const arrayWithValuesFromCompleted = [positiveValueExpense.toUpperCase(), positiveValueNumb, positiveValueLabel];
        const arrayWithValuesAfterSave = await HomePage.getTextFromFieldAfterSave();
        assert.deepEqual(arrayWithValuesAfterSave, arrayWithValuesFromCompleted, 'Values on homepage are different from input values');

        await browser.pause(3000);
    });
});
