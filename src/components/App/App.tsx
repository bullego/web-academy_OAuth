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
import { Hello } from '../Hello';


const TOKEN_STORAGE_KEY = 'TOKEN';
const { REACT_APP_API_KEY } = process.env;
const INITIAL_STATE = {
	token: '',
	userName: 'bullego1',
	userProfile: undefined,
	someText: 'test_test_test',
	//boards: [],
}


// interface Board {
// 	id: string;
// 	name: string;
// 	desc?: string;
// 	pinned: boolean;
// }
interface AppState {
	token: string;
	userName: string;
	userProfile: any;
	//boards: Array<Board>;
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
		setToLocalStorage<CustomToken>(TOKEN_STORAGE_KEY, {token, someValue: 10});
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

				<Route  path={ROUTES_URLS.HOME}
								render={(props: RouteChildrenProps) => {
									return <Hello {...props} setText={this.someFunc()} />
								}}
				/>
			</main>
		)
	}

	private renderRoute = (route: AppRoute, indx: number) => {
		if(route.isProtected) {
			return  <ProtectedRoute key={indx} 
															path={route.path}
															exact={route.exact}
															//render={route.render}
															render={(props) => {
																console.log('_____PROPS_____: ', props);
																return route.render({...props,
																										 token: this.state.token,
																										 userName: this.state.userName})
															}}
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

	private someFunc = () => {
		return this.state.someText
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



/*
Храним токен в Арр в стейте и передаем его через пропсы в компонент Дашборд

создать страницу-компонент (отдельный роут) Юзерпрофайл и хранить в стейте Юзерпрофайл все запрашиваемые данные в ней, напр. обьект Юзердата и внутри Имя, фамилия, мейл, аватар и т.д. 
В главном компоненте Арр в стейте храним только токен

Потом это же можно порторить на Редаксе, после проверки задания


*/