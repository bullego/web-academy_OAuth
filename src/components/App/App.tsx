import * as React from 'react';
import { Route,
				 Link,
				 Switch,
				 Redirect,
				 RouteChildrenProps,
				 RouteComponentProps,
				 withRouter } from 'react-router-dom';
import { routes,
				 AppRoute,
				 ROUTES_URLS } from './routes';
import { getFromLocalStorage, setToLocalStorage } from '../../utils';
import { Authorization } from '../Authorization';
import { ProtectedRoute } from '../ProtectedRoute';
import './App.scss';


const TOKEN_STORAGE_KEY = 'TOKEN';
const { REACT_APP_API_KEY } = process.env;
const INITIAL_STATE = {
	token: '',
	boards: [],
	userProfile: undefined
}


interface Board {
	id: string;
	name: string;
	desc?: string;
	pinned: boolean;
}
interface AppState {
	token: string;
	boards: Array<Board>;
	userProfile: any;
}
interface AppProps extends RouteComponentProps {

}
interface CustomToken {
	token: string;
	someValue?: number;
}


class App extends React.Component<AppProps, AppState> {
	public state = INITIAL_STATE;

	componentDidMount() {		
		this.getToken();
	}

	private async getToken() {
		if(this.state.token) {
			return;
		}
		
		const { token } = getFromLocalStorage<CustomToken>(TOKEN_STORAGE_KEY);
		
		if(!token) {			
			return this.goToLogin();
		}
		
		const url = `https://api.trello.com/1/members/me?key=${REACT_APP_API_KEY}&token=${token}`;
		const response = await fetch(url);

		if(response.ok === true && response.status === 200) {
			const userProfile = await response.json();

			this.setProfile(userProfile);
			this.setToken(token);

			return this.goToDashboard();
		}

		return this.goToLogin();
	}

	private setProfile = (userProfile: any) => {
		this.setState({
			userProfile: userProfile
		})
	}
	
	private setToken = (token: any) => {
		this.setState({
			token: token
		})		
		setToLocalStorage<CustomToken>(TOKEN_STORAGE_KEY, {token});
	}

	private goToLogin() {
		this.props.history.push(ROUTES_URLS.LOGIN);
	}

	private goToDashboard() {
		this.props.history.push(ROUTES_URLS.DASHBOARD);
	}

	private get isLoggedIn() {
		return !!this.state.token;
	}

	private renderHeader() {
		return (
			<header className='header'>
				{ routes.map((link: AppRoute, indx: number) => {
					return link.isHidden ? null :	<Link key={indx}
																							to={link.path}>
																					{link.title}
																				</Link>
					})
				}
				<button onClick={this.logOut}>
						Log Out
				</button>
			</header>
		)
	}

	private logOut = () => {
		this.setState(INITIAL_STATE);
		this.goToLogin();
	}

	private renderContent() {
		return (
			<main className='main'>
				<Switch>
					{routes.map(this.renderRoute)}

					<Route	path={ROUTES_URLS.AUTHORIZATION}
									render={(props: RouteChildrenProps) => { 
										return <Authorization {...props} onSetToken={this.setToken} />
									}}
					/>
					<Redirect to={ROUTES_URLS.NOT_FOUND} />
				</Switch>
			</main>
		)
	}

	private renderRoute = (route: AppRoute, indx: number) => {
		if(route.isProtected) {
			return  <ProtectedRoute key={indx} 
															path={route.path}
															exact={route.exact}
															render={route.render}
															isAuthenticated={this.isLoggedIn}
			 				/>
		}
		else {
			return  <Route key={indx} 
										 path={route.path}
										 exact={route.exact}
										 render={(props) => {
										 	return route.render({...props})
										 }}
							/>
		}
	}

	public render() {
		return (
			<div>
				{ this.renderHeader() }
				{ this.renderContent() }
			</div>
		)
	}
}

const AppWithRouter = withRouter(App);
export { AppWithRouter as App };


// "homepage": "https://bullego.github.io/web-academy_OAuth/",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",