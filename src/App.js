import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { Router, navigate } from "@reach/router"
import { appState } from './redux/app'
import { userState } from './redux/user'
//components
import Dialog from './components/Dialog'
import { Route, SignOut } from './Styled' // import here for parcel HMR
//image and style
//routes
const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))
const Login = lazy(() => import('./routes/Login'))
//loading component
const Loading = () => <div>Loading</div>
//bring in both states here
//can also use connect in route components when data is specific to those routes
export default connect(
	(state) => ({
		appState: appState(state),
		userState: userState(state),
	})
)(function App(props) {

	const {
		appState: { dialog, loading },
		userState: { isLoggedIn }
	} = props

	if (window.location.pathname.indexOf('login') === -1 && !isLoggedIn) {
		navigate('/login')
	}

	return (
		<div>
			{ loading && <Loading />}
			<Dialog {...dialog} />
			
			<Suspense fallback={<Loading />}>
				<Router>
					<Home {...props} path="/" />
					<About {...props} path="/about" />
					<Login {...props} path="/login" />
				</Router>
			</Suspense>
		</div>
	)
})