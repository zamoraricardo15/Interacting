
const bubblesortOnce = bubble => {

    for(let i=0; i<bubble.length; i++)

      if(bubble[i] > bubble[i+1])

        [bubble[i], bubble[i+1]] = [bubble[i+1], bubble[i]] 

    return bubble

  }

console.log(bubblesortOnce([27,72,2277,7722,2,7,277777,7272]));