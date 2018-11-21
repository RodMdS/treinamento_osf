function isEven(number) {
    return (number % 2 == 0 ? "even" : "odd");
}

function generateRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

module.exports = {
    isEven,
    generateRandomNumber
}