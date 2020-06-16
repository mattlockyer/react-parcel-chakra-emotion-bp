import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { mount, login } from '../redux/user'

import { Route } from '../theme/Styled'
import { Heading, Button, Input, Stack } from "@chakra-ui/core"

export default function Login(props) {

	const { userState } = props

	const [name, setName] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		console.log('mount')
		dispatch(mount(true))
	}, [])

	if (userState.resuming) {
        return <div>
			<h1>Resuming {userState.name}</h1>
		</div>
	}

	return (
		<Route>
			<Stack spacing={4}>
				<Heading size="md">Login</Heading>
				<Input 
					variant="flushed" 
					placeholder="Name" type="text" 
					value={name}
					onChange={(e) => setName(e.target.value)} 
					onKeyDown={({ key }) => {
						if (key === 'Enter') {
							dispatch(login(name))
							setName('')
						}
					}}
				/>

				<Button 
					onClick={() => {
						dispatch(login(name))
						setName('')
					}}
				>
					Login
				</Button>
			</Stack>
		</Route>
	)
}