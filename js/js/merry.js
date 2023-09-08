const eve = document.querySelector("h2#eve");

function dDay() {
  const eve23 = new Date('2023-12-25T00:00:00');
  const today = new Date();

  const untilEve = eve23 - today;

  const countDays = Math.floor(untilEve / (1000 * 60 * 60 * 24));
  const countHours = String(Math.floor(untilEve / (1000 * 60 * 60) % 24)).padStart(2, "0");
  const countMinutes = Math.floor(untilEve / (1000 * 60) % 60);
  const countSeconds = String(Math.floor(untilEve / 1000 % 60)).padStart(2, "0");

  eve.innerText = `${countDays}d ${countHours}h ${countMinutes}m ${countSeconds}s`;
}

dDay();
setInterval(dDay, 1000);