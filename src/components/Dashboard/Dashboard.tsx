import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import { getFromLocalStorage } from '../../utils';
import './Dashboard.scss';

const { REACT_APP_API_KEY } = process.env;
const TOKEN_STORAGE_KEY = 'TOKEN';

interface PropsDashboard extends RouteChildrenProps {
	token?: string;
}

export class Dashboard extends React.Component<PropsDashboard> {
	state = {
		boards: []
	}

	private getToken() {
		const token = getFromLocalStorage(TOKEN_STORAGE_KEY);
		return token;
	}
	
	componentDidMount() {	
		const id = '5efc78dc483c927431aef6e5';
		const token = this.getToken();
		const url = `https://api.trello.com/1/members/${id}/boards?key=${REACT_APP_API_KEY}&token=${token}`;		

		fetch(url)
			.then((response) => {
				if(response.status !== 200) {
					throw Error('not success')
				}
				return response.json();
			})
			.then((boards) => {				
				this.setBoards(boards);							
			})
			.catch(err => {
				console.log(err);
			})		
	}

	private setBoards = (boards: any) => {
		this.setState({
			boards: boards
		})
	}

	
	render() {
		const { boards } = this.state;		
		const showBoardsTitle = boards.map((el:any, indx: number) => {
			return (
				<li key={indx} className='board-item'>
					<a href='#' className='board-link'>
						<span className='board-title'>{el.name}</span>
					</a>
				</li>
			)
		})

		return (
			<div className='Dashboard'>
				<h2>Hello from dashboard</h2>
				<hr/>
				<ul className='board-items'>
					{showBoardsTitle}
				</ul>
			</div>
		)
	}
}