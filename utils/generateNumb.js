export default function generateNumb(testOption) {

    if (testOption === 'positive') {
        const min = 0;
        const max = 999;
        let rand = min + Math.random() * (max + 1 - min);
        return String(Math.floor(rand));
    } else if (testOption === 'negative') {
        const min = -999;
        const max = -1;
        let rand = min + Math.random() * (max + 1 - min);
        return String(Math.floor(rand));
    } else{
        return 'Enter test option (positive or negative)';
    };
};
