function combineImproved<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const result = combineImproved(arr1, arr2); // This works fine
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

const arr3: (number | string)[] = [1,2,'a'];
const arr4: (number | string)[] = [4,5,6];

const result2 = combineImproved(arr3, arr4); // This works without error
console.log(result2); // Output: [1, 2, 'a', 4, 5, 6]

//Alternative solution using type guard
function isNumber(item: any): item is number {
  return typeof item === 'number';
}

function combineNumbers(arr1: any[], arr2: any[]): number[] {
  const combined = [...arr1, ...arr2];
  return combined.filter(isNumber);
}

const arr5 = [1,2,'a' as any, 3];
const arr6 = [4,5,6];

const result3 = combineNumbers(arr5, arr6); //filters out non-numbers
console.log(result3); //Output: [1,2,3,4,5,6]