
  function max(array) {


    var maximal = Number.NEGATIVE_INFINITY;
  
    for (var  numarray = 0;  numarray < array.length;  numarray++) {

      var previos = array[numarray];
      if (previos > maximal) {

        maximal = previos;
      }

    }
  
    return maximal;
  }
  

  function min(array) {

    var minimal = Number.POSITIVE_INFINITY;
  
    for (var  numarray = 0;  numarray < array.length;  numarray++) {
      var previos = array[numarray];

      if (previos < minimal) {
        minimal = previos;

      }
    }
  
    return minimal;
  }
  

  function sum(array) {
    var total = 0;

  
    for (var  numarray = 0;  numarray < array.length;  numarray++) {
      total += array[ numarray];

    }
  
    return total;
  }
  
  function average(array) {

    return sum(array) / array.length;
  }
  
  
  function maxMinAvg(array) {

    var maximal = max(array);
    var minimal = min(array);

    var avg = average(array);

    return 'Minimum: ' + minimal + ', Maximum: ' + maximal + ', and Average: ' + avg;



  }
  
  console.log(maxMinAvg([1, -2, 9, 4]));