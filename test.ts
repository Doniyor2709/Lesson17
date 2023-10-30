// 1
// function getSum(n: number): number {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += (2 * i - 1) * (i % 2 === 1 ? 1 : 2);
//   }
//   return sum;
// }

// let n = 3;
// console.log(getSum(n));

// 2
// function getHighestNumberOfDigits(arr: number[]): number {
//   let maxDigits = 0;
//   let maxNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const digits = Math.floor(Math.log10(arr[i])) + 1;
//     if (digits > maxDigits) {
//       maxDigits = digits;
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// }

// let arr = [1589, 31851, 512, 180975, 78];
// console.log(getHighestNumberOfDigits(arr));

// 3
// function getStringArr(arr: (string | number | boolean)[]): string[] {
//   return arr.filter((item) => typeof item === "string") as string[];
// }

// let arr2 = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];
// console.log(getStringArr(arr2));

//4
// function getPunctuationNumber(str: string): number {
//   const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (punctuationSigns.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// let str = "Hello! How are you? I'm doing great. What's new?";
// console.log(getPunctuationNumber(str));

// Задача 5: switchLetters
// function switchLetters(str: string): string {
//   let switchedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char === char.toUpperCase()) {
//       switchedStr += char.toLowerCase();
//     } else {
//       switchedStr += char.toUpperCase();
//     }
//   }
//   return switchedStr;
// }

// let str2 = "Abdulaziz Programmer";
// console.log(switchLetters(str2));


// 5
// function changeObjToArr(obj: Record<string, any>): string[] {
//   return Object.keys(obj).map((key) => key + obj[key]);
// }

// let obj = { a: 1, b: 2, c: 3 };
// console.log(changeObjToArr(obj)); // Output: ["a1", "b2", "c3"]

// Задача 7: seperateStudents
// type Student = { name: string; isGrant: boolean };
// function seperateStudents(students: Student): { grant: string[]; contract: string[] } {
//   const grant: string[] = [];
//   const contract: string[] = [];
//   for (let student of students) {
//     if (student.isGrant) {
//       grant.push(student.name);
//     } else {
//       contract.push(student.name);
//     }
//   }
//   return { grant, contract };
// }

// let students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];
// console.log(seperateStudents(students));




////////////
// part 2/
///////////



// 1
// function getSum(n: number): number {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i ** (i % 2 || 2);
//   }
//   return sum;
// }

// console.log(getSum(5)); 


//2
// function getLongestWord(arr: string[]): string {
//   let longestWord = "";
//   for (let word of arr) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// const arr = ["Abdulaziz", "Murod", "Yulduz", "Abdug'affor", "Jamila"];
// console.log(getLongestWord(arr));


//3
// function getDividers(arr: number[], n: number): number[] {
//   return arr.filter((num) => num % n === 0);
// }

// const arr2 = [2, 5, 7, 10, 0, 18, 15];
// console.log(getDividers(arr2, 5));


//4
// function checkWordCapitalize(str: string): boolean {
//   const words = str.split(" ");
//   return words.every((word) => word[0] === word[0].toUpperCase());
// }

// const str = "Abdulaziz Programmer Is FullStack Developer";
// console.log(checkWordCapitalize(str));
