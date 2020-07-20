import React, { FunctionComponent } from "react";
import { RouteChildrenProps } from "react-router";
import { Redirect } from "react-router-dom";
import { ROUTES_URLS } from '../App/routes';


interface PropsAuthorization extends RouteChildrenProps {
	onSetToken: (token: string) => void
}

export const Authorization: FunctionComponent<PropsAuthorization> = (props: PropsAuthorization) => {
	console.log('PROPS from AUTH: ', props);
	
	const {location:{hash}, onSetToken} = props;
	const token = hash.split('=')[1];
	//const path = pathname.split('/')[1];

	onSetToken(token);
	
	
	console.log('HISTORY: ', window.location.pathname);
	console.log('DASHBOARD_URL: ', ROUTES_URLS.DASHBOARD);

	return <Redirect to={ROUTES_URLS.DASHBOARD} />

	// if(pathname === ROUTES_URLS.DASHBOARD) {
	// 	return <Redirect to={ROUTES_URLS.DASHBOARD} />
	// }
	//return <Redirect to={ROUTES_URLS.USER_PROFILE} />
}