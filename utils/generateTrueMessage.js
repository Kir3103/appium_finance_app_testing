export default function generateTrueMessage() {

    let resultMessage = '';
    const length = 5;
    const valueForMessage = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0, n = valueForMessage.length; i < length; ++i) {
        resultMessage += valueForMessage.charAt(Math.floor(Math.random() * n));
    };
    return resultMessage;
};