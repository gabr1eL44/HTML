let input = prompt("Bitte geben Sie einen String ein: ");
if (isPalindrome(input))
    alert("Das ist ein Palindrom!");
else
    alert("Das ist leider kein Palindrom!");

function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
  }