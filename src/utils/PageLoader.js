import React, { Fragment } from 'react';

import PropagateLoader from "react-spinners/PropagateLoader";

import Box from "@material-ui/core/Box";

const PageLoader = () => {
	return (
		<Fragment>
			<Box display="flex" justifyContent="center" margin="50px 0">
				<PropagateLoader color="#000000" />
			</Box>
		</Fragment>
	)
}

export default PageLoader;
