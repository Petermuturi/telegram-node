const express = require('express');
let app = express();

let port = Number(process.env.PORT || 3000);

app.listen(port, function(){
	console.log('server listening on port 3000');
});