const mathFunctions = {
    sum: arr => arr.reduce((sum, val) => sum + val, 0),
  
    random: (min, max) => Math.floor(Math.random() * (max - min)) + min,
  
    generateStars: (arr, max, prevValue) => {
      let newArr = [];
      for (let i = 0; i < arr.length - 1; ++i)
        for (let j = i + 1; j < arr.length; ++j) {
          const temp = arr[i] + arr[j];
          if (temp <= max && !newArr.includes(temp) && temp !== prevValue) newArr.push(temp);
        }
        if(newArr.length === 0)
        newArr = [...arr];
  
      return newArr[mathFunctions.random(0, newArr.length - 1)];;
    }
  };

  export default mathFunctions;