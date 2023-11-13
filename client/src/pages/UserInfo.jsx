import axios from 'axios';
import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const UserInfo = () => {
  const data=useLoaderData();
  const handleDelete=(id)=>{
    swal({
      title: "Good job!",
      text: "Successfully deleted!",
      icon: "success",
    });
   axios.delete(`http://localhost:5000/api/employee/${id}`)
   .then(res=>console.log(res.data));
  }
  console.log(data);
  return (
    <div className='pb-32 pt-12'>
      <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Employee Profile
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {`ID: ${data.id}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Full Name: ${data.firstName} ${data.lastName}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`First Name: ${data.firstName}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Last Name: ${data.lastName}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Age: ${data.age}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Position: ${data.position}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Email: ${data.email}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Phone: ${data.phone}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Address: ${data.address}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Image: ${data.image}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Department: ${data.department}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Joining Date: ${data.joiningDate}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Salary: ${data.salary}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Skills: ${data.skills}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Education
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Degree: ${data.education[0].degree}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`University: ${data.education[0].university}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Graduation Year: ${data.education[0].graduationYear}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <button onClick={()=>handleDelete(data.id)}>Delete</button>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <Link to={`/update/${data.id}`} >Update</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  )
}

export default UserInfo