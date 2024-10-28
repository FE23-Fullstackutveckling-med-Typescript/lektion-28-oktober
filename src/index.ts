const button: HTMLElement = document.querySelector("#calculateButton");

function calculateTip(sum: number, tip: number): number {
  return sum * tip;
}

function divideTotal(total: number, numberOfFriends: number): number {
  return total / numberOfFriends;
}

function showDividedSum(sum: number): void {
  document.querySelector("#inputForm").classList.toggle("hide");
  document.querySelector("#showSum").classList.toggle("hide");

  const friendSumElem = document.querySelector("#friendSum");
  friendSumElem.innerHTML = `${sum} kr`;
}

button.addEventListener("click", () => {
  const sumElem: HTMLInputElement = document.querySelector(
    "#sum"
  ) as HTMLInputElement;
  const tipElem: HTMLInputElement = document.querySelector(
    "#tip"
  ) as HTMLInputElement;
  const friendsElem: HTMLInputElement = document.querySelector(
    "#numberOfFriends"
  ) as HTMLInputElement;

  const sum: number = parseInt(sumElem.value);
  const tip: number = parseInt(tipElem.value);
  const numberOfFriends: number = parseInt(friendsElem.value);

  const calculatedTip: number = calculateTip(sum, tip);
  const total: number = sum + calculatedTip;
  const sumDivided: number = divideTotal(total, numberOfFriends);

  showDividedSum(sumDivided);
});
