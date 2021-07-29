exports.createPages = async ({ graphql, actions }) => {
    const {createRedirect} = actions;
    createRedirect({
			fromPath: '/aboutus',
			toPath: 'about',
			redirectInBrowser: true,
			isPermanent: true,
		});
}   