import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';


interface PropsHello extends RouteChildrenProps {
	setText?: string;
	boards?: any;
}


export class Hello extends React.Component<PropsHello> {	
	render() {
		console.log('APP_PROPS_FROM_HELLO: ', this.props);

		const { setText: showText } = this.props;

		return (
			<div>
				<h1>Hello World</h1>
				<p>{showText}</p>
			</div>
		)
	}
}