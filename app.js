import { readFile } from "node:fs/promises";

const filePath = process.argv[2];
const searchWord = process.argv[3];

const fileContent = await readFile(filePath, "utf-8");

const wordsArray = (fileContent.split(/[\W]+/).filter((w) => w));


const wordsCount = {}

wordsArray.forEach((word) => {
    const lowerCaseWord = word.toLowerCase();
    if (lowerCaseWord in wordsCount) {
        wordsCount[lowerCaseWord] += 1;
    } else {
        wordsCount[lowerCaseWord] = 1;
    }
});

if (searchWord) {
   
    const lowerCaseSearchWord = searchWord.toLowerCase();
    
    if (lowerCaseSearchWord in wordsCount) {
      console.log(`The word '${searchWord}' appears ${wordsCount[lowerCaseSearchWord]} times.`);
    } else {
      console.log(`The word '${searchWord}' does not appear in the file.`);
    }
  } else {
    
    console.log("Word count for all words:");
    console.log(wordsCount);
  }

  