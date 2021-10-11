import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { makeStyles } from '@mui/styles';

import { getUsers, deleteUser } from "../service/api";
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles({
// 	table: {
// 		width: '90%',
// 		margin: '50px 0 0 50px'
// 	},
// 	thead: {
// 		'& > *': {
// 			fontSize: 20,
// 			background: '#000000',
// 			color: '#FFFFFF'
// 		}
// 	},
// 	row: {
// 		'& > *': {
// 			fontSize: 18
// 		}
// 	}
// })


export const AllDeveloper = () => {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		getAllUsers();
	}, []);

	const deleteUserData = async (id) => {
		await deleteUser(id);
		getAllUsers();
	}

	const getAllUsers = async () => {
		let response = await getUsers();
		setUsers(response.data);
	}



	return (
		<div>
			<Table>
				<TableHead>
					<TableRow >
						<TableCell>Id</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Username</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow  key={user._id}>
							<TableCell>{user.id}</TableCell>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.lastName}</TableCell>
							<TableCell>{user.emailId}</TableCell>
							<TableCell>
								{/* <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button> */}
								{/* <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> */}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

//https://www.youtube.com/watch?v=A73N9tREM_Q&t=148s

