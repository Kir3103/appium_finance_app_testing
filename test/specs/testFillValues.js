import { assert } from 'chai';
import HomePage from '../../page/HomePage.js';
import generateText from '../../utils/generateText.js';
import generateNumb from '../../utils/generateNumb.js';

describe('Test Fill value on homepage', function (){

    it('Open homepage, fill value, click button "Save" and check value on homepage', async function(){

        await HomePage.isPageOpen();
        const valueExpense = generateText('positive');
        await HomePage.fillExpenseName(valueExpense);
        const valueNumb = generateNumb('positive');
        await HomePage.fillExpenseAmount(valueNumb);
        const valueLabel = generateText('positive');
        await HomePage.fillExpenseLabel(valueLabel);
        const arrayWithValuesForFilling = [valueExpense, valueNumb, valueLabel];
        const resultAfterFilling = await HomePage.getTextFromField();
        assert.deepEqual(resultAfterFilling, arrayWithValuesForFilling, 'Values after filling are different');

        await HomePage.clickOnSaveBtn();
        assert.isTrue(await HomePage.isStatisticExist(), 'Statistic is not exist');

        const arrayWithValuesFromCompleted = [valueExpense.toUpperCase(), valueNumb, valueLabel];
        const arrayWithValuesAfterSave = await HomePage.getTextFromFieldAfterSave();
        assert.deepEqual(arrayWithValuesAfterSave, arrayWithValuesFromCompleted, 'Values on homepage are different from input values');
    });
});
