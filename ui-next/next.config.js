module.exports = {
	webpack: (config) => {
		// This is needed because grapesjs-mjml uses grapesjs in some weird way
		// If module names are minified then it doesn't work
		config.optimization.minimize = false;
		return config;
	}
};
