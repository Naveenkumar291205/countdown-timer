document.addEventListener('DOMContentLoaded', () => {
  const datetimePicker = document.getElementById('datetime-picker');
  const startBtn = document.getElementById('start-btn');
  const countdownEl = document.getElementById('countdown');
  const messageEl = document.getElementById('message');
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  let countdownInterval;

  startBtn.addEventListener('click', () => {
    const targetDate = new Date(datetimePicker.value);
    if (isNaN(targetDate.getTime())) {
      messageEl.textContent = 'Please select a valid date and time.';
      return;
    }
    if (targetDate <= new Date()) {
      messageEl.textContent = 'Please select a future date and time.';
      return;
    }
    messageEl.textContent = '';
    startCountdown(targetDate);
  });

  function startCountdown(targetDate) {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownEl.style.display = 'none';
        messageEl.textContent = 'Countdown finished!';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
  }
});
