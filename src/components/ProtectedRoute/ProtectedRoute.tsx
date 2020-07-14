import React, { FunctionComponent } from 'react';
import { Route,
				 Redirect,
				 RouteProps,
				 RouteComponentProps } from 'react-router-dom';


export interface ProtectedRouteProps extends RouteProps {
	isAuthenticated: boolean;
	boards: any;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ render, isAuthenticated, ...rest }) => {
	console.log('PROTECTED rest PROPS: ', {...rest});
	
  return (
		<Route	{...rest}
						render={( routeCompPrps: RouteComponentProps) =>
							isAuthenticated ? (
								render!(routeCompPrps)
							) : (
								<Redirect
									to={{
										pathname: "/login",
										state: { from: routeCompPrps.location }
									}}
								/>
							)
						}
    />
  );
}

export { ProtectedRoute }