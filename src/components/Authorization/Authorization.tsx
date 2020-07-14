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

	onSetToken(token);

	return <Redirect to={ROUTES_URLS.DASHBOARD} />
}