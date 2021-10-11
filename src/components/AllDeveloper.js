import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { getUsers, deleteUser } from "../service/api";
import { Button } from '@mui/material';
import { AddDeveloper } from "../components/AddDeveloper";




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
			<AddDeveloper />
			<Table sx={{
				maxWidth: "1200px",
				width: "90%",
				marginLeft: "auto",
				marginRight: "auto",
				marginTop:"20px"
			}}>
				<TableHead>
					<TableRow sx={{
						background: "black",
					}} >
						<TableCell sx={{color:"white",fontSize:15,textAlign:"center"}}>Id</TableCell>
						<TableCell sx={{color:"white",fontSize:15,textAlign:"center"}}>Name</TableCell>
						<TableCell sx={{color:"white",fontSize:15,textAlign:"center"}}>Lastname</TableCell>
						<TableCell sx={{color:"white",fontSize:15,textAlign:"center"}}>Email</TableCell>
						<TableCell sx={{color:"white",fontSize:15,textAlign:"center"}}>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow  key={user.id}>
							<TableCell sx={{textAlign:"center"}}>{user.id}</TableCell>
							<TableCell sx={{textAlign:"center"}}>{user.name}</TableCell>
							<TableCell sx={{textAlign:"center"}}>{user.lastName}</TableCell>
							<TableCell sx={{textAlign:"center"}}>{user.emailId}</TableCell>
							<TableCell sx={{textAlign:"center"}}>
								<Button color="primary" variant="contained" style={{ marginRight: 10 }} >Edit</Button>
								<Button color="secondary" variant="contained"  onClick={() => deleteUserData(user.id)}>Delete</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}


