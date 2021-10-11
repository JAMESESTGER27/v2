import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import React, { useState } from 'react'
import { addUser } from '../service/api';

const initialValue = {
 name: '',
 lastName: '',
 emailId: ''
}
export const AddDeveloper = () => {

    const [user, setUser] = useState(initialValue);
    const { name, lastName, emailId } = user;

    
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
    }

    return (
        <FormGroup sx={{ 
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:"20px"}}
        >
            <Typography variant="h4">Add developer</Typography>
            <FormControl sx={{marginY: "10px"}}>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={handleChange} name='name' value={name} id="my-input"  />
            </FormControl>
            <FormControl sx={{marginY: "10px"}}>
                <InputLabel htmlFor="my-input">Lastname</InputLabel>
                <Input onChange={handleChange} name='lastName' value={lastName} id="my-input" />
            </FormControl>
            <FormControl sx={{marginY: "10px"}}>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={handleChange} name='emailId' value={emailId} id="my-input" required/>
            </FormControl>
            <FormControl sx={{marginY: "10px"}}>
                <Button variant="contained" color="primary" onClick={() => addUserDetails(user)}>Add Developer</Button>
            </FormControl>
        </FormGroup>
    )
}
