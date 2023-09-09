// Set the target launch date and time (year, month (0-11), day, hour, minute, second)
const targetDate = new Date('2023-12-31T00:00:00');

function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time remaining in milliseconds
  const timeRemaining = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('countdown-timer').innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
  `;

  // Check if the target date and time have passed
  if (timeRemaining < 0) {
    document.getElementById('countdown-timer').innerHTML = 'We have launched!';
    // You can also perform any actions you need when the countdown ends here.
  }
}

// Call the updateCountdown function every second (1000 milliseconds)
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
