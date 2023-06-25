import BasePage from './BasePage.js';
import Button from '../elements/Button.js';
import Label from '../elements/Label.js';
import TextField from '../elements/TextField.js';

const locatorStatisticBtn = new Button('//android.widget.TextView[@content-desc="Statistics"]');
const locatorImportBtn = new Button('//android.widget.TextView[@content-desc="Import/Export"]');
const locatorSettingBtn = new Button('//android.widget.TextView[@content-desc="Settings"]');
const locatorHelpBtn = new Button('//android.widget.TextView[@content-desc="Help"]');
const locatorExpenseName = new TextField('//*[contains(@resource-id,"TextViewExpenseName")]');
const locatorExpenseAmount = new TextField('//*[contains(@resource-id,"TextExpenseAmount")]');
const locatorExpenseLabel = new TextField('//*[contains(@resource-id,"TextViewExpenseLabel")]');
const locatorExpenseSave = new Button('//*[contains(@resource-id,"ExpenseSave")]');
const locatorExpenseList = new Label('//*[contains(@resource-id,"ExpenseList")]');
const locatorExpenseNameAfterSave = new Label('//*[contains(@resource-id,"expenseName")]');
const locatorExpenseAmountAfterSave = new Label('//*[contains(@resource-id,"expenseAmount")]');
const locatorExpenseLabelAfterSave = new Label('//*[contains(@resource-id,"expenseLabels")]');

class HomePage extends BasePage {
    
    constructor () {
        super(locatorExpenseSave);
    };

    async clickOnStatisticBtn () {
        return locatorStatisticBtn.clickRegular();
    };

    async clickOnImportBtn () {
        return locatorImportBtn.clickRegular();
    };

    async clickOnSettingBtn () {
        return locatorSettingBtn.clickRegular();
    };

    async clickOnHelpBtn () {
        return locatorHelpBtn.clickRegular();
    };

    async fillExpenseName (textForFill) {
        return locatorExpenseName.sendKeys(textForFill);
    };

    async fillExpenseAmount (numbForFill) {
        return locatorExpenseAmount.sendKeys(numbForFill);
    };

    async fillExpenseLabel (labelForFill) {
        return locatorExpenseLabel.sendKeys(labelForFill);
    };

    async getTextFromField () {
        const resultArrayAfterFilling = []
        resultArrayAfterFilling.push(await locatorExpenseName.getTextFromElem());
        resultArrayAfterFilling.push(await locatorExpenseAmount.getTextFromElem());
        resultArrayAfterFilling.push(await locatorExpenseLabel.getTextFromElem());
        return resultArrayAfterFilling;
    };

    async clickOnSaveBtn () {
        return locatorExpenseSave.clickRegular();
    };

    async isStatisticExist () {
        return locatorExpenseList.elementIsExisting();
    };

    async getTextFromFieldAfterSave () {
        const resultArrayAfterSave = []
        resultArrayAfterSave.push(await locatorExpenseNameAfterSave.getTextFromElem());
        resultArrayAfterSave.push(await locatorExpenseAmountAfterSave.getTextFromElem());
        resultArrayAfterSave.push(await locatorExpenseLabelAfterSave.getTextFromElem());
        return resultArrayAfterSave;
    };

};

export default new HomePage();
