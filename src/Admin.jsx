import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { FormControl, Button, Box, Input } from "@mui/material";
import { Auth, Logger } from "aws-amplify";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url("https://i.etsystatic.com/11810216/r/il/92ae91/2863045699/il_1588xN.2863045699_s5m7.jpg")`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "100px",
  },
});

const Admin = () => {
  const classes = useStyles();
  const logger = new Logger("AuthLogger");

  const [email, changeEmailValue] = useState("");
  const [password, changePassValue] = useState("");
 
  useEffect(() => {
    const checkIfUser = async () => {
        const user = await Auth.currentAuthenticatedUser();
        updateUser(user)
      }
    checkIfUser()
  }, [])

  const [user, updateUser] = useState({})

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    name === "email" ? changeEmailValue(value) : changePassValue(value);
  };

  const login = async () => {
    try {
      const user = await Auth.signIn({
        username: email,
        password,
        autoSignIn: {
          enabled: true,
        },
      });
      updateUser(user)
      logger.info(`${email} signed in to admin console`);
    } catch (error) {
      console.log("login error:", error);
    }
  };

  const handleLogin = () => {
    login();
  };


const isUser = Object.keys(user).length > 0

  return (
    <>
      <div className={classes.background}>
        <Box
          sx={{
            backgroundColor: "rgba(256, 256, 256, 0.8)",
            height: "250px",
            margin: "0 auto",
            width: "420px",
            maxWidth: "520px",
            py: 5,
          }}
        >
          <FormControl fullWidth>
            <Input
              name="email"
              onChange={(e) => handleInputChange(e)}
              value={email}
              placeholder="email"
              sx={{ m: "0 auto", color: "black", mb: 5 }}
            />
          </FormControl>
          <FormControl fullWidth>
            <Input
              name="pass"
              onChange={(e) => handleInputChange(e)}
              value={password}
              placeholder="password"
              sx={{ m: "0 auto", color: "black", mb: 5 }}
            />
          </FormControl>
          <FormControl fullWidth>
            <Button
              sx={{ m: "0 auto", mb: 5 }}
              size="large"
              color="primary"
              variant="outlined"
              onClick={handleLogin}
            >
              Login
            </Button>
          </FormControl>
        </Box>
      </div>
    </>
  );
};

export default Admin;
