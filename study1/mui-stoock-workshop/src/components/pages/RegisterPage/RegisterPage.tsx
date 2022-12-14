import * as React from "react";
import { useNavigate } from "react-router";
import {Formik, FormikProps} from "formik";
import { Box, Button, Card, CardContent, Stack, SxProps, TextField, Typography } from '@mui/material'
import { Theme } from "@emotion/react";
import { User } from "../../../types/user.type";
import { httpClient } from './../../../utils/httpclient'
import { server } from "../../../Constants";
import * as registerActions from "../../../actions/register.action";
import { useDispatch, useSelector } from "react-redux";
import {RootReducers} from "../../../reducers"
import { useAppDispatch } from "../../../main";
type RegisterPageProps = {
  //
};


const RegisterPage: React.FC<any> = () => {
 const registerRequest = useSelector((state:RootReducers)=>state.registerReducer)
 
 const dispatch = useAppDispatch();
 
 const navigate = useNavigate();
 const classes: SxProps<Theme> | any= {
   root: { display: 'flex', justifyContent: 'center' },
   buttons: {marginTop: 2}
 }


 const showFormV1 = ({handleSubmit,handleChange,values,isSubmitting}:FormikProps<any>) => {
   return (
     <form action="" onSubmit={handleSubmit}>
       <label>Username:</label>
       <input
         type="text"
         name="username"
         id="username"
         onChange={handleChange}
         value={values.username}
       />
       <br />
       <label>Password:</label>
       <input
         type="text"
         name="password"
         id="password"
         onChange={handleChange}
         value={values.password}
       />
       <br />
       <br />
       <button type="submit" disabled={isSubmitting}>Submit</button>
       <button onClick={() => navigate("/login")}>Back</button>
     </form>
   )
 }
 const showFormV2 = ({handleSubmit,handleChange,values,isSubmitting}:FormikProps<User>) => {
   return (
     <form action="" onSubmit={handleSubmit}>
       <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         id="username"
         label="Username"
         onChange={handleChange}
         value={values.username}
         autoComplete="email"
         autoFocus
       />
       <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         id="password"
         label="Password"
         onChange={handleChange}
         value={values.password}
         type="password"
       />

       <br />

       <Stack direction="row" spacing={2} sx={classes.buttons}>
         <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
           disabled={isSubmitting}
         >
           Create
         </Button>
         <Button
           onClick={() => navigate("/login")}
           type="button"
           fullWidth
           variant="outlined"
         >
           Cancel
         </Button>
       </Stack>
     </form>
   )
 }

 const initialValues:User = { username: '', password: '' }

 
 return (
   <>
     <Box sx={classes.root}>
       <Card sx={{ maxWidth: 345 }}>
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
             Register
           </Typography>
           <Formik
             onSubmit={ async (values, { setSubmitting }) => {
             dispatch(registerActions.register(values))
            }}
             initialValues={initialValues}
           >
             {(props) => showFormV2(props)}
           </Formik>
         </CardContent>
       </Card>
     </Box>
   </>
 )
}
export default RegisterPage;
