//sample = ['one', 'two', 'three', 'four', 'five'];

//console.log( sample);

//replace the value
//sample[1] = 2;
//console.log ( sample);

    //start   

//shift method
 //remove the first value
//sample.shift();
 //   console.log('output of shift: ' + sample);

//unshift adding value in fist array
//sample.unshift('six');
 //   console.log('output of unshift: ' +  sample);


    //end
    //POP = delete the last value of the array
   //console.log (`the number has been deleted is ${sample.pop()}`)

    //push 
  //  let s = sample.push('ten')

   // console.log ("the number has been added : " + sample [sample.length -1] );
   // console.log(sample)

const todo = [];
    todo.unshift('learn');
    todo.unshift('learn again');
    todo.unshift('learn more and more');

    for(let i = 0; i <= todo.length -1; i++ ){
        console.log(todo[i])
    }
