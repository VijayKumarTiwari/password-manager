var argv = require("yargs").argv;
var command = argv._[0];

if(command === "hello"){
	if(typeof argv.name !== "undefined"){
		if(typeof argv.lastname !== "undefined"){
			console.log("Hello "+argv.name+" "+argv.lastname+"!");
		}else{
			console.log("Hello "+argv.name+"!");	
		}
	}else{
		console.log("Hello World!");	
	}	
}

console.log(argv);
