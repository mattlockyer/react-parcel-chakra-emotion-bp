import React from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { setDialog } from '../redux/app'
import { logout } from '../redux/user'
import { Route } from '../theme/Styled'
import { Heading, Button, ButtonGroup, Input, Stack } from "@chakra-ui/core"

export default function Home(props) {

	const { userState: { name } } = props

	const dispatch = useDispatch()

	return (
		<Route>
			<Stack spacing={4}>
			<ButtonGroup spacing={4}>
				<Button onClick={() => navigate('/')}>Home</Button>
			</ButtonGroup>
			<Heading size="md">About</Heading>
			<img src="https://placedog.net/500" />
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</Stack>
		</Route>
	)
}