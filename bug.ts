function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const result = combine(arr1, arr2); // This works fine
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

const arr3 = [1,2,'a' as any];
const arr4 = [4,5,6];

const result2 = combine(arr3, arr4); // This compiles but throws runtime error
console.log(result2); // Throws error: Argument of type 'string' is not assignable to parameter of type 'number'.