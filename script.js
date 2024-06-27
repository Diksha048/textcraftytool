function giveActionResult(action) {
    const inputElement = document.getElementById("input-text");
    const resultElement = document.getElementById("result-text");
  
    if (action === 'uppercase') {
      resultElement.innerText = inputElement.value.toUpperCase();
    } else if (action === 'lowercase') {
      resultElement.innerText = inputElement.value.toLowerCase();
    } else if (action === 'wordcount') {
      resultElement.innerText = 'Total Words: ' + inputElement.value.split(" ").length;
    } else {
      resultElement.innerText = 'Total Characters: ' + inputElement.value.length;
    }
  }