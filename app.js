const inputRange = document.getElementById("progress-bar");
const storageUsed = document.getElementById("storage-used-number");
const storageLeft = document.getElementById("number");

inputRange.addEventListener("input", () => {
  const usedValue = parseInt(inputRange.value);
  storageUsed.innerText = usedValue;
  storageLeft.innerText = 1000 - usedValue;
});
