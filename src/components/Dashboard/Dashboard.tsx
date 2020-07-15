import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import './Dashboard.scss';


const { REACT_APP_API_KEY } = process.env;


interface PropsDashboard extends RouteChildrenProps {
	token?: string;
	userName?: string;
}
interface Board {
	id: string;
	name: string;
	desc?: string;
	pinned?: boolean;
}
interface DashState {
	boards: Array<Board>;
}

export class Dashboard extends React.Component<PropsDashboard, DashState> {
	state = {
		boards: []
	}

	componentDidMount() {
		this.getBoards();
	}

	private getBoards = () => {
		console.log('props from app to dash: ', this.props);
		
		const { token, userName } = this.props;
		const url = `https://api.trello.com/1/members/${userName}/boards?key=${REACT_APP_API_KEY}&token=${token}`;

		console.log('url FROM APP: ', url);
		
		fetch(url)
			.then((response) => {
				if(response.status !== 200) {
					throw Error('not success')
				}
				return response.json();
			})
			.then((boards) => {
				console.log('Boards: ', boards);
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
		console.log('PROPS_in_DASH: ', this.props);

		const { boards } = this.state;

		console.log('BoArDs____: ', boards);
		
				
		const showBoards = boards.map((el:any, indx: number) => {
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
					{showBoards}
				</ul>
			</div>
		)
	}
}