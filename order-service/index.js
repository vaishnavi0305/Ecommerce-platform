const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/health', (req,res) => {
	res.status(200).send('Order Service is healthy!');
});

app.listen(PORT, () => {
	console.log('order service running on port ${PORT}');	
});
