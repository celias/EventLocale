import React from 'react';

const HomePage = ({ history }) => {
	return (
		<div>
			<div className="ui inverted vertical masthead center aligned segment">
				<div className="ui text container">
					<h1 className="ui inverted stackable header">
						<img className="ui image massive" src="/assets/logo.png" alt="logo" />
						<div className="content">Event Locale</div>
					</h1>
					<h2>Let's do stuff!</h2>
					<div onClick={() => history.push('/events')} className="ui huge white inverted button">
						Get Started
						<i className="arrow alternate circle right outline icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
