let numbers = [];
while (true) {
    let input = prompt("Bitte gültige Zahl eingeben: ");
    if (!isNaN(input) && input != "")
        numbers.push(input);
    else break;
}

document.writeln("<strong>Sortierte Ausgabe der eingegebenen Zahlen:</strong><br><br>");
let sortedNumbers = bubbleSort(numbers)
for(let i in sortedNumbers) {
    alert(sortedNumbers[i]);
    document.writeln(sortedNumbers[i]);
} 

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }