import BaseElement from "./BaseElement.js";

export default class TextField extends BaseElement{
    async sendKeys (value) {
        $(this.locator).clearValue();
        return (await $(this.locator).setValue(value));
    };
};
