const mongoose = require('mongoose');

mongoose.connect(
	'mongodb+srv://listtodo:zcm1hDMDZnsabNy9@cluster0.7e6ob2o.mongodb.net/?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

mongoose.connection.on('connected', () => {
	console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
	console.error('Error connecting to MongoDB:', err);
});
