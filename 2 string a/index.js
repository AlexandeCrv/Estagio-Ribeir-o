function strung() {
  let string = document.getElementById("string").value;
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      count++;
    }
  }

  document.getElementById(
    "resultado"
  ).textContent = `Quantidade de letras 'a' ou 'A': ${count} `;
}
