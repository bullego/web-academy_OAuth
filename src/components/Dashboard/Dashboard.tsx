import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import './Dashboard.scss';


interface PropsDashboard extends RouteChildrenProps {
	boards?: any;
}

export class Dashboard extends React.Component<PropsDashboard> {
	state = {
		boards: []
	}

	// private setBoards = (boards: any) => {
	// 	this.setState({
	// 		boards: boards
	// 	})
	// }

	
	render() {
		console.log('PROPS_in_DASH: ', this.props);

		//const { boards } = this.state;
				
		// const showBoards = boards.map((el:any, indx: number) => {
		// 	return (
		// 		<li key={indx} className='board-item'>
		// 			<a href='#' className='board-link'>
		// 				<span className='board-title'>{el.name}</span>
		// 			</a>
		// 		</li>
		// 	)
		// })

		return (
			<div className='Dashboard'>
				<h2>Hello from dashboard</h2>
				<hr/>
				<ul className='board-items'>
					{/* {showBoards} */}
				</ul>
			</div>
		)
	}
}