const inputRange = document.getElementById("progress-bar");
const storageUsed = document.getElementById("storage-used-number");
const storageLeft = document.getElementById("number");

inputRange.addEventListener("input", () => {
  usedValue = parseInt(inputRange.value);
  storageUsed.innerText = usedValue;
  storageLeft.innerText = 1000 - usedValue;
  updateProgressBar;
});

function updateProgressBar() {
  const value =
    ((inputRange.value - inputRange.min) / (inputRange.max - inputRange.min)) * 100;
  inputRange.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${value}%, #ddd ${value}%, #ddd 100%)`;
}
