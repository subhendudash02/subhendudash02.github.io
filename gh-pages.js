var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/subhendudash02/subhendudash02.github.io.git', // Update to point to your repository
		user: {
			name: 'Subhendu Dash', // update to use your name
			email: 'sdash29102@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);