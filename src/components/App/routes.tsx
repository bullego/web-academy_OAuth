import * as React from 'react';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { Login } from '../Login';
import { Dashboard } from '../Dashboard';
import { NotFound } from '../NotFound';


export enum ROUTES_URLS {
	HOME = '/',
	LOGIN = '/login',
	DASHBOARD = '/dashboard',
	AUTHORIZATION = '/authorization',
	NOT_FOUND = '/404',
}

export interface AppRoute {
	path: ROUTES_URLS,
	exact?: boolean,
	render: (props: any) => any,
	title?: string,
	isHidden?: boolean,
	isProtected?: boolean
}


export const routes: Array<AppRoute> = [
	{
		path: ROUTES_URLS.LOGIN,
		exact: true,
		title: 'Go to Home/Login',
		render: (props: any) => <Login {...props}/>
	},
	{
		path: ROUTES_URLS.DASHBOARD,
		exact: false,
		title: 'Go to Dashboard',
		isProtected: true,
		render: (props: RouteChildrenProps) => <Dashboard {...props}/>
	},
	{
		path: ROUTES_URLS.HOME,
		exact: true,
		isHidden: true,
		render: () => <Redirect to={ROUTES_URLS.LOGIN}/>
	},
	{
		path: ROUTES_URLS.NOT_FOUND,
		isHidden: true,
		render: (props: RouteChildrenProps) => <NotFound {...props}/>
	}
]