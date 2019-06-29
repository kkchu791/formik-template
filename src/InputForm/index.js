import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup"

const styles = theme => ({
 paper: {
   margin: theme.spacing(8,0),
   padding: theme.spacing(8,10),
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
 },
 container: {
   minWidth: "500px",
   backgroundColor: "#f5f5f5",
 }
});

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class InputForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
      name: "",
      email: ""
    };
 }

  submitValues = ({ name, email, confirmPassword, password }) => {
    console.log({ name, email, confirmPassword, password });
  };

 render() {
  const {classes} = this.props;
   const values = { name: "", email: "", confirmPassword: "", password: "" };
   return (
     <React.Fragment>
           <div className={classes.container}>
           <Paper elevation = {1} className = {classes.paper}>
           <h1>Form</h1>
           <Formik
             render = {props => <Form {...props} />}
             initialValues = {values}
             validationSchema = {validationSchema}
             onSubmit={this.submitValues}
           />
         </Paper>
       </div>
     </React.Fragment>
   );
 }
}                                

export default withStyles(styles)(InputForm);
