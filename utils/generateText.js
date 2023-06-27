export default function generateText(testOption) {

    if (testOption === 'positive') {
        let resultMessage = '';
        const length = 5;
        const valueForMessage = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 0, n = valueForMessage.length; i < length; ++i) {
            resultMessage += valueForMessage.charAt(Math.floor(Math.random() * n));
        };
        return resultMessage;
    } else if (testOption === 'negative') {
        let resultMessage = '';
        const length = 5;
        const valueForMessage = '"[|]~<!--@/*$%^&#*/()?>,.*`|« »;:';
        for (var i = 0, n = valueForMessage.length; i < length; ++i) {
            resultMessage += valueForMessage.charAt(Math.floor(Math.random() * n));
        };
        return resultMessage;
    } else{
        return 'Enter test option (positive or negative)';
    };
};