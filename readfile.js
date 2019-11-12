var fs = require("fs");

/*fs.readFile("temp.txt", "utf-8", (err, data) => {
	var datas= data;
	var res = datas.split("");
   console.log(res);

});



var  functionss =function() {
  var str = "Howareyoudoingtoday mdsamdsamd jdmasodmasod asfdjasopdsaop";
  var res = str.split(" ");



   for (var i = 0; i < res.length; i++) {
  	console.log(`rm -rf ${res[i]}`)
  }


}
functionss();

	va
   for (var i = 0; i < array.length; i++) {
  	console.log(`rm -rf ${array[i]}`)
}
*/

var array = fs.readFileSync('temp.txt').toString().split('\n');
for(i in array) {
	var sam= array[i]
    console.log(`rm -rf ${sam}`);
}
