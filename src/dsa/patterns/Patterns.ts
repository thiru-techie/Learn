export default class Patterns {
  static One(n: number) {
    let result = "";
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        result += "*";
      }
      result += "\n";
    }
    return result;
  }

  static Two(n: number) {
    let result = "";
    for (let row = 0; row <= n; row++) {
      for (let col = 0; col < row; col++) {
        result += "*";
      }
      result += "\n";
    }
    return result;
  }

  static Three(n: number) {
    let result = "";
    for (let row = 0; row <= n; row++) {
      for (let col = 1; col <= row; col++) {
        result += col;
      }
      result += "\n";
    }
    return result;
  }

  static Four(n: number) {
    let result = "";
    for (let row = 0; row <= n; row++) {
      for (let col = 1; col <= row; col++) {
        result += row;
      }
      result += "\n";
    }
    return result;
  }

  static Five(n: number) {
    let result = "";
    for (let row = 0; row <= n; row++) {
      for (let col = n; col >= row; col--) {
        result += "*";
      }
      result += "\n";
    }
    return result;
  }

  static Six(n: number) {
    let result = "";
    for (let row = 0; row <= n; row++) {
      for (let col = n; col >= row; col--) {
        result += n - col;
      }
    }
    return result;
  }

  static Seven(n: number) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let space = 1; space <= n - row; space++) {
        result += " ";
      }
      for (let col = 1; col <= row * 2 - 1; col++) {
        result += "*";
      }
      // for (let col = 1; col <= row - 1; col++) {
      //   result += "*";
      // }
      result += "\n";
    }
    return result;
  }

  static Eight(n: number) {
    let result = "";
    for (let row = 0; row <= n; row++) {
      for (let space = 0; space <= row; space++) {
        result += " ";
      }
      for (let col = 0; col <= (n - row) * 2 - 2; col++) {
        result += "*";
      }
      result += "\n";
    }
    return result;
  }

  // n = 5
  // 6 , 7 , 8, 9, 10 => space = 1 , 2, 3, 4, 5

  // ans -> 9, 7 , 5, 3, 1

  static Nine(n: number) {
    let result = "";
    for (let row = 1; row <= n * 2; row++) {
      let space = 0;
      for (
        space = 1;
        row <= n ? space <= n - row : space <= row - n - 1;
        space++
      ) {
        result += " ";
      }
      for (
        let col = 1;
        row <= n ? col <= 2 * row - 1 : col <= n * 2 - ((row - 1) % n) * 2 - 1;
        col++
      ) {
        result += "*";
      }
      result += "\n";
    }
    return result;
  }

  static Ten(n: number) {
    let result = "";
    for (let row = 1; row <= n * 2 - 1; row++) {
      for (let col = 1; row <= n ? col <= row : col <= n * 2 - row; col++) {
        result += "*";
      }

      result += "\n";
    }
    return result;
  }

  static Eleven(n: number) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      let data: number = row % 2 ? 1 : 0;
      for (let col = 1; col <= row; col++) {
        result += "" + data;
        data = data === 0 ? 1 : 0;
      }
      result += "\n";
    }
    return result;
  }

  static Eleven1(n: number) {
    let result = "";
    for (let row = 0; row < n; row++) {
      for (let col = row + 1; col > 0; col--) {
        result += "" + (col % 2);
      }
      result += "\n";
    }
    return result;
  }

  static Twelve(n: number) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      let col = 0;
      for (col = 1; col <= row; col++) {
        result += col;
      }
      for (let space = 0; space < (n - col + 1) * 2; space++) {
        result += " ";
      }
      for (let num = row; num >= 1; num--) {
        result += num;
      }
      result += "\n";
    }
    return result;
  }

  static Thirteen(n: number) {
    let result = "";
    let colData = 0;
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= row; col++) {
        colData += 1;
        result += colData;
      }
      result += "\n";
    }
    return result;
  }

  static Fourteen(n: number) {
    let result = "";
    for (let row = 0; row <= n; row++) {
      for (let col = 0; col < row; col++) {
        result += String.fromCharCode(65 + col);
      }
      result += "\n";
    }
    return result;
  }

  static Fifteen(n: number) {
    let result = "";
    for (let row = 0; row <= n; row++) {
      for (let col = n; col >= row; col--) {
        result += String.fromCharCode(65 + (n - col));
      }
      result += "\n";
    }
    return result;
  }

  static Sixteen(n: number) {
    let result = "";
    for (let row = 0; row < n; row++) {
      for (let col = 0; col <= row; col++) {
        result += String.fromCharCode(65 + row);
      }
      result += "\n";
    }
    return result;
  }

  static Seventeen(n: number) {
    let result = "";
    for (let row = 0; row < n; row++) {
      for (let space = 0; space < n - row; space++) {
        result += " ";
      }
      for (let col = 0; col <= row * 2 - 1 + 1; col++) {
        result +=
          col <= row
            ? String.fromCharCode(65 + col)
            : String.fromCharCode(65 + 2 * row - col);
      }
      result += "\n";
    }
    return result;
  }

  static Eighteen(n: number) {
    let result = "";
    for (let row = 0; row < n; row++) {
      for (let col = 0; col <= row; col++) {
        result += String.fromCharCode(65 + (n - row) + col);
      }
      result += "\n";
    }
    return result;
  }

  static Nineteen(n: number) {
    let result = "";
    const MultipleRows = n * 2;
    for (let row = 1; row <= MultipleRows; row++) {
      for (let col = 1; col <= MultipleRows; col++) {
        if (n >= row) {
          // row - 1,2,3,4,5
          if (col <= (n - (row - 1)) || col > (n + (row - 1))) {
            result += "*";
          }else {
            result += " ";
          }
        } else {
          // row - 6,7,8,9,10
          if (col <= (row - n) || col >= MultipleRows) {
            result += "*";
          } else {
            result += " ";
          }
        }

      }
      result += "\n";
    }
    return result;
  }

  static Twenty(n: number) {
    let result = "";
    const MultipleRows = n * 2;
    for (let row = 1; row <= MultipleRows; row++) {
      for (let col = 1; col <= MultipleRows; col++) {
        if (col <= row || col + (row - 1) >= MultipleRows) {
          result += "*";
        }else {
          result += "-";
        }
      }
      result += "\n";
    }
    return result;
  }

  static TwentyOne(n: number) {
    let result = "";
    const MultipleRows = (n * 2) - 1;
    for (let row = 1; row <= MultipleRows; row++) {
      for (let col = 1; col <= MultipleRows; col++) {
       result += ""+ col;
      }
      result += "\n";
    }
    return result;
  }
}
