const decrement = (firstEl, secondEl) => {
  let firstDigit = Number(firstEl.textContent);
  let secondDigit = Number(secondEl.textContent);

  if (secondDigit >= 1) {
    //Decrements one unit when at least secondDigit is more than 1
    secondDigit = secondDigit - 1;
    secondEl.textContent = secondDigit.toString();
    return false;
  }

  if (firstDigit >= 1) {
    secondEl.textContent = "9";
    firstDigit = firstDigit - 1;
    firstEl.textContent = firstDigit.toString();
    return false;
  }

  secondEl.textContent = "9";
  firstEl.textContent = "5";
  return true;
};

const decrementOneDay = () => {
  const firstEl = document.querySelector(
    ".rounded-container--days :nth-child(1)"
  );
  const secondEl = document.querySelector(
    ".rounded-container--days :nth-child(2)"
  );

  return decrement(firstEl, secondEl);
};

const decrementOneHour = () => {
  const firstEl = document.querySelector(
    ".rounded-container--hours :nth-child(1)"
  );
  const secondEl = document.querySelector(
    ".rounded-container--hours :nth-child(2)"
  );

  return decrement(firstEl, secondEl);
};

const decrementOneMinute = () => {
  const firstEl = document.querySelector(
    ".rounded-container--minutes :nth-child(1)"
  );
  const secondEl = document.querySelector(
    ".rounded-container--minutes :nth-child(2)"
  );

  return decrement(firstEl, secondEl);
};

const decrementOneSecond = () => {
  const firstEl = document.querySelector(
    ".rounded-container--seconds :nth-child(1)"
  );
  const secondEl = document.querySelector(
    ".rounded-container--seconds :nth-child(2)"
  );
  return decrement(firstEl, secondEl);
};

const handleTimer = () => {
  if (decrementOneSecond() === true) {
    if (decrementOneMinute() === true) {
      if (decrementOneHour() === true) {
        decrementOneDay();
      }
    }
  }
};

const startCountdown = () => {
  setInterval(() => {
    handleTimer();
  }, 1000);  
}

export default startCountdown; 