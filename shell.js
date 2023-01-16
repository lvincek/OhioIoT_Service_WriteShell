


const { exec } = require('child_process');


module.exports = function(command) {
	return new Promise(function(resolve, reject) {
		exec(command, (error, stdout, stderr) => {
			// console.log(`\nexec stdout:\n${stdout}`);
	        if (error) {
	        	console.log("GOT AN ERROR IN SHELL EXEC");
	            console.error(`\nexec error:\n ${error}`);
	            console.log(`\nexec stderr:\n ${stderr}`);
	            resolve({error, stderr});
	        }
	        resolve({stdout})
	    });

	})
	.catch(function(err) {
		console.log("error in ohioiot writeShell service:");
		console.log(err);
	});
}	

			
