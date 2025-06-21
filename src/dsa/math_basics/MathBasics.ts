export default class MathBasics {
  static GetCountByNumber(number: number) {
    let count: number = 0;
    while (number > 0) {
      number = Math.trunc(number / 10);
      count++;
    }
    return count;
  }

  static GetReverseNumber(number: number) {
    let resultData: number = 0;
    const isMinus = number < 0;
    number = isMinus ? number * -1 : number;
    while (number > 0) {
      const modularData = number % 10;
      resultData = resultData * 10 + modularData;
      number = Math.trunc(number / 10);
    }
    resultData = isMinus ? resultData * -1 : resultData;
    return resultData;
  }

  // Greatest Common Deviser
  static GetGCD(a: number, b: number) {
    while (a > 0 && b > 0) {
      if (a > b) {
        a = a % b;
      } else {
        b = b % a;
      }
    }
    return a > 0 ? a : b;
  }

  static GetArmstrong(number: number) {
    const _number = number;
    const count = MathBasics.GetCountByNumber(number);
    let resultData = 0;
    while (number > 0) {
      const modularData = number % 10;
      resultData += modularData ** count;
      number = ~~(number / 10);
    }
    console.log("final", resultData);
    return resultData === _number;
  }

  // 36 -> Time Complexity = o of N
  static GetAllDivisor(number: number) {
    const arrResult = [];
    for (let index = 1; index <= number; index++) {
      // Math.sqrt
      if (number % index === 0) arrResult.push(index);
    }
    return arrResult;
  }

  // Nandha Solution
  static GetAllDivisorNandhaSolutions(number: number) {
    const arrResult = [];
    for (let index = 1; index <= Math.sqrt(number); index++) {
      // Math.sqrt
      if (number % index === 0) {
        arrResult.push(index);
        if (index != number / index) arrResult.push(number / index);
      }
    }
    return arrResult;
  }

  static GetPrimeNumber(n: number) {
    if (n <= 1) return false;
    if (n < 4) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  static recursionName(n: number) {
    if (n < 0) return;
    console.log("name", n);
    this.recursionName(n - 1);
    console.log("name", n);
  }

  static recursionSumOfN(n: number): number {
    if (n < 0) return 0;
    console.log(n);
    return n + this.recursionSumOfN(n - 1);
  }

  static recursionFactorial(n: number): number {
    if (n <= 0) return 1;
    console.log(n);
    return n * this.recursionFactorial(n - 1);
  }

  static recursionReverseByArray(arr: number[], s: number, e: number): any[] {
    if (s >= e) return [];
    const x = arr[s];
    e = e - 1;
    arr[s] = arr[e];
    arr[e] = x;
    return this.recursionReverseByArray(arr, s + 1, e);
  }

  static recursionPolindrom(
    arrTxt: string[],
    s: number,
    e: number,
    txt: string
  ): any {
    if (s >= e) return true;
    e = e - 1;
    if (txt.charAt(e) == txt.charAt(s)) {
      return this.recursionPolindrom(arrTxt, s + 1, e, txt);
    } else {
      return false;
    }
  }

  static GetFibonacci(n: number): number[] {
    const arrFibonacci = [];
    arrFibonacci.push(0);
    if (n <= 0) return arrFibonacci;
    if (n === 1) return arrFibonacci;
    arrFibonacci.push(1);
    for (let index = 2; index < n; index++) {
      arrFibonacci.push(arrFibonacci[index - 2] + arrFibonacci[index - 1]);
    }
    return arrFibonacci;
  }

  static fibonacci(n: number, arr: number[]): number {
    if (n < 2) return n;
    if (arr[n] != 0) return n;
    const fibData = this.fibonacci(n - 2, arr) + this.fibonacci(n - 1, arr);
    arr[n] = fibData;
    return fibData;
  }

  static recursionFibonacci(n: number): number {
    const ans = [];
    const arr = Array(n + 1).fill(0);
    return this.fibonacci(n, arr);
  }

  static largestElement(arr: number[]): number {
    if (arr.length === 1) return arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      max = arr[i] > max ? arr[i] : max;
    }
    return max;
  }

  static largestSecondElement(arr: number[]): number {
    if (arr.length === 1) return arr[0];
    let max = arr[0];
    let secondMax = -Infinity;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        if (secondMax < max) secondMax = max;
        max = arr[i];
      }
      if (max > arr[i] && secondMax < arr[i]) {
        secondMax = arr[i];
      }
    }
    return secondMax;
  }

  static maxAccurance(arr: number[]): number {
    const staticArr = Array(10).fill(0);
    for (let i = 0; i < arr.length; i++) {
      staticArr[arr[i]]++;
    }

    let max = 0;
    for (let index = 1; index < staticArr.length; index++) {
      max = staticArr[index] > staticArr[max] ? index : max;
    }
    return max;
  }
  // same Object

  static maxAccuranceLetters(str: string): string {
    const arrAccurance = Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - 97;
      arrAccurance[index]++;
    }

    let max = 0;
    for (let index = 1; index < arrAccurance.length; index++) {
      max = arrAccurance[index] > arrAccurance[max] ? index : max;
    }
    return String.fromCharCode(max + 97);
  }

  static selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      const data = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = data;
    }
    return arr;
  }

  static bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length - i; j++) {
        if (arr[j] < arr[j - 1]) {
          const data = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = data;
        }
      }
    }
    return arr;
  }

  static rightRotation(arr: number[]): number[] {
    const lastData = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lastData;
    return arr;
  }

  static leftRotation(arr: number[]): number[] {
    const lastData = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = lastData;
    return arr;
  }

  static insertionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j > 0; j--) {
        if (arr[j - 1] < arr[j]) {
          break;
        }
        const data = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = data;
      }
    }
    return arr;
  }

  static merge(leftArr: number[], rightArr: number[]): number[] {
    const arr: number[] = [];
    let i = 0;
    let j = 0;
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        arr.push(leftArr[i]);
        i++;
      } else {
        arr.push(rightArr[j]);
        j++;
      }
    }

    // leftArr index of i balance -> 2,3
    while (i < leftArr.length) {
      arr.push(leftArr[i]);
      i++;
    }

    // rightArr index of j balance -> 2,3
    while (j < rightArr.length) {
      arr.push(rightArr[j]);
      j++;
    }
    return arr;
  }

  static mergeSort(arr: number[]): number[] {
    if (arr.length === 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);

    return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
  }
}
