export default class BasePage {
    
    constructor(uniqueElem) {
        this.uniqueElem = uniqueElem;
    };
    
    async isPageOpen () {
        if (this.uniqueElem.getLength() === 0) {
            return false;
        }else {
            return true;
        };
    };
};
