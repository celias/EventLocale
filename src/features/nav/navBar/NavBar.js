import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
	state = {
		authenticated: false
	};

	handleSignIn = () => {
		this.setState({
			authenticated: true
		});
	};

	handleSignOut = () => {
		this.setState({
			authenticated: false
		});
		// This works because of Higher order components (withRouter)
		this.props.history.push('/');
	};

	render() {
		const { authenticated } = this.state;
		return (
			<div>
				 <Menu inverted fixed="top">
					<Container>
						<Menu.Item as={Link} to="/" header>
							<img src="/assets/yes.png" alt="logo" />
							Event Locale
						</Menu.Item>
						
						<Menu.Item as={NavLink} to="/events" name="Events" />
						{authenticated && <Menu.Item as={NavLink} to="/people" name="People" />}
						{authenticated && (
							<Menu.Item>
								<Button
									as={Link}
									to="/createEvent"
									floated="right"
									color="teal"
									content="Create Event"
								/>
							</Menu.Item>
						)}

						{authenticated ? (
							<SignedInMenu signOut={this.handleSignOut} />
						) : (
							<SignedOutMenu signIn={this.handleSignIn} />
						)}
					</Container>
				</Menu>
			</div>
		);
	}
}
export default withRouter(NavBar);
