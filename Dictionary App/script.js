const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!response.ok) {
      throw new Error("Word not found");
    }
    const data = await response.json();
    const definitions = data[0].meanings[0].definitions[0];
    resultDiv.innerHTML = `
      <h2><strong>Word:</strong> ${data[0].word}</h2>
      <p><strong>Part of Speech:</strong> ${
        data[0].meanings[0].partOfSpeech
      }</p>
      <p><strong>Meaning:</strong> ${
        definitions.definition ? definitions.definition : "not found"
      }</p>
      <p><strong>Example:</strong> ${
        definitions.example ? definitions.example : "not found"
      }</p>
      <p><strong>Antonyms:</strong> ${
        definitions.antonyms && definitions.antonyms.length > 0
          ? definitions.antonyms.join(", ")
          : "not found"
      }</p>
    `;
    console.log(data);
  } catch (error) {
    resultDiv.innerHTML = `<p>${error.message}</p>`;
    console.error(error);
  }
};
