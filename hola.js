const board = () => {
    let array1 = [];
    for (let i = 0; i < 12; i++) {
      let array2 = [];
      for (let j = 0; j < 10; j++) {
        array2.push(j);
      }
      array1.push(array2);
    }
    return array1;
  };
console.log(board());
