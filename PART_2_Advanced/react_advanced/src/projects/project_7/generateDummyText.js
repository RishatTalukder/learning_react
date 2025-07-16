import { loremIpsum } from "lorem-ipsum";

const generateDummyText = (paragraphs, words) => {
   const sentencePerParagraph = Math.floor(Math.random() * (5-3 + 1)) + 3; // generating a random number of sentences per paragraph (between 3 and 7)


  const getRandomWords = ()=> loremIpsum({ count: 1, units: 'words' }); // generating a single random word

  const getRandomSentence = () => Array.from({
    length: words < 5 ? 5 : words // ensuring at least 5 words in a sentence
  }, getRandomWords).join(" ") + "."; // generating a random sentence with the specified number of words

  const getRandomParagraph = () => Array.from({ length: sentencePerParagraph }, getRandomSentence).join(" "); // generating a random paragraph with the specified number of sentences

  return Array.from({ length: paragraphs }, getRandomParagraph) // generating the final dummy text with the specified number of paragraphs
};

export default generateDummyText;