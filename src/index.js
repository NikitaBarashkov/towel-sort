
// You should implement your task here.

module.exports = function towelSort (matrix) {
  function compare(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0;
    if (a < b) return -1; 
  }
  
  if(matrix == undefined){
    let emptyArr = []
    return emptyArr;
  }

  let newAr = [];
  let lastArr = [];
  let lengthStep; 
  const arrSteps = [];
  
  matrix.forEach(arr => {
    lengthStep = arr.length;
    arrSteps.push(lengthStep);
    arr.forEach(function (elem) {
      newAr.push(elem);
      newAr.sort(compare);
    })
  })

  let i = 0;
  while(i < newAr.length){
    for(let step = 0; step < arrSteps.length; step++){
      let tiny = newAr.slice(i, i + arrSteps[step]);
      lastArr.push(tiny);
      i = i + arrSteps[step];
    }
  }

  for(let i = 0; i < lastArr.length; i++){
    if(!(i % 2 === 0)){
      lastArr[i].reverse();
    } 
  }
  
    return(lastArr.flat())
  }

