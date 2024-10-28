const button = document.querySelector("#calculateButton");
function calculateTip(sum, tip) {
    return sum * tip;
}
function divideTotal(total, numberOfFriends) {
    return total / numberOfFriends;
}
function showDividedSum(sum) {
    document.querySelector("#inputForm").classList.toggle("hide");
    document.querySelector("#showSum").classList.toggle("hide");
    const friendSumElem = document.querySelector("#friendSum");
    friendSumElem.innerHTML = `${sum} kr`;
}
button.addEventListener("click", () => {
    const sumElem = document.querySelector("#sum");
    const tipElem = document.querySelector("#tip");
    const friendsElem = document.querySelector("#numberOfFriends");
    const sum = parseInt(sumElem.value);
    const tip = parseInt(tipElem.value);
    const numberOfFriends = parseInt(friendsElem.value);
    const calculatedTip = calculateTip(sum, tip);
    const total = sum + calculatedTip;
    const sumDivided = divideTotal(total, numberOfFriends);
    showDividedSum(sumDivided);
});
