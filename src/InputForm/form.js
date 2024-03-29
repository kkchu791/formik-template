import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/styles';
import TextField from "@material-ui/core/TextField";

export const Form = (props) => {

  const { values: { name, email, password, confirmPassword },
          errors,
          touched,
          handleSubmit,
          handleChange,
          isValid,
          setFieldTouched
        } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    console.log(errors);
    setFieldTouched(name, true, false);
  }

  const useStyles = makeStyles({
    root: {
       padding: "15px 0 0 0"
    },
  });

  const classes = useStyles();

  return (
   <form onSubmit={handleSubmit}>
     <TextField
       id="name"
       name="name"
       helperText={touched.name ? errors.name : ""}
       error={touched.name && Boolean(errors.name)}
       label="Name"
       value={name}
       onChange={change.bind(null, "name")}
       fullWidth
     />
     <TextField
       id="email"
       name="email"
       helperText={touched.email ? errors.email : ""}
       error={touched.email && Boolean(errors.email)}
       value={email}
       label="Email"
       onChange={change.bind(null, "email")}
       fullWidth
     />
     <TextField
       id="password"
       name="password"
       helperText={touched.password ? errors.password : ""}
       error={touched.password && Boolean(errors.password)}
       label="Password"
       fullWidth
       type="password"
       value={password}
       onChange={change.bind(null, "password")}
     />
     <TextField
       id="confirmPassword"
       name="confirmPassword"
       helperText={touched.confirmPassword ? errors.confirmPassword : ""}
       error={touched.confirmPassword && Boolean(errors.confirmPassword)}
       label="Confirm Password"
       fullWidth
       type="password"
       value={confirmPassword}
       onChange={change.bind(null, "confirmPassword")}

     />
     <Button
       type="submit"
       fullWidth
       variant="raised"
       color="primary"
       disabled={!isValid}
       className={classes.root}

     >
       Submit
     </Button>
   </form>
 );
};
