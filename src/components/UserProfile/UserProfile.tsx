import * as React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import './UserProfile.scss';


const { REACT_APP_API_KEY } = process.env;


interface PropsUserProfile extends RouteChildrenProps {
	token?: string;
	userName?: string;
}
interface UserData {
	username?: string;
	fullName?: string;
	email?: string;
	avatarUrl?: boolean;
}
interface UserProfileState {
	userData: Array<UserData>;
}


export class UserProfile extends React.Component<PropsUserProfile> {
	state = {
		userData: {
			username: '',
			fullName: '',
			email: '',
			avatarUrl: ''
		}
	}

	componentDidMount() {
		this.getBoards();
	}

	private getBoards = () => {
		console.log('props from app to userProfile: ', this.props);
		
		const { token, userName } = this.props;
		const url = `https://api.trello.com/1/members/${userName}?key=${REACT_APP_API_KEY}&token=${token}`;

		console.log('url in UserProfile: ', url);
		
		fetch(url)
			.then((response) => {
				if(response.status !== 200) {
					throw Error('not success')
				}
				return response.json();
			})
			.then((userData) => {
				console.log('userData: ', userData);
				this.setUserData(userData);							
			})
			.catch(err => {
				console.log(err);
			})
	}

	private setUserData = (userData: any) => {
		const newUserData = {
			username: userData.username,
			fullName: userData.fullName,
			email: userData.email,
			avatarUrl: userData.avatarUrl
		}

		this.setState({
			userData: newUserData
		})
	}
	

	render() {
		const {username, fullName, email, avatarUrl} = this.state.userData;

		return (
			<div className='UserProfile'>
				<h2 className='profile-title'>User Profile</h2>

				<ul className='profile-items'>
					<li className='profile-item'>
						<p>
							<img className='profile-avatar' src={avatarUrl} alt="user avatar"/>
						</p>
					</li>
					<li className='profile-item'>
						<p>
							<strong>User name: </strong>{username}
						</p>
					</li>
					<li className='profile-item'>
						<p>
							<strong>Full name: </strong>{fullName}
						</p>
					</li>
					<li className='profile-item'>
						<p>
							<strong>Email: </strong>{email}
						</p>
					</li>
				</ul>
			</div>
		)
	}
}