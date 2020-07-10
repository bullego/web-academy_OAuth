import React, { FunctionComponent } from 'react';
import { Route,
				 Redirect,
				 RouteProps,
				 RouteComponentProps } from 'react-router-dom';


interface ProtectedRouteProps extends RouteProps {
	isAuthenticated: boolean;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ render, isAuthenticated, ...rest }) => {
  return (
    <Route	{...rest}
						render={( routeCompPrps: RouteComponentProps ) =>
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