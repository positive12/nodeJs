let months = [ 'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July','Aug.', 'Sept', 'Oct', 'Nov' ];


//console.log(days);

months.forEach(function(array,index){
	console.log(array, index + 1);
});




let todo =[];

    todo.unshift('learn');
    todo.unshift('learn again');
    todo.unshift('learn more and more');

    todo.forEach(function(todos, index){
    	console.log(`these are the list of things that I want todo ${todos} for the --  ${months[2]}`);
    })