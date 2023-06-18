export default function generateTrueNumb() {

    let resultMessage = '';
    const length = 5;
    const valueForMessage = '0123456789';
    for (var i = 0, n = valueForMessage.length; i < length; ++i) {
        resultMessage += valueForMessage.charAt(Math.floor(Math.random() * n));
    };
    return resultMessage;
};