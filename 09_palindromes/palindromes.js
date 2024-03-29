function palindromes(string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedString = string
      .toLowerCase()
      .split("")
      .filter((character) => alphanumerical.includes(character))
      .join("")

    const newString = cleanedString.split("").reverse().join("");

    return cleanedString === newString;
  }

  console.log(palindromes("r3ace3car"));

// Do not edit below this line
module.exports = palindromes;
