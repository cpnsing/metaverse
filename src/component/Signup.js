import {
    makeStyles,
    Box,
    Container,
    Typography,
    TextField,
    FormHelperText,
    Grid,
    Button,

    Select,
    MenuItem,

} from "@material-ui/core";
import React, { useState, useMemo, useEffect } from "react";
import { Form, Formik } from "formik";
import * as yep from "yup";
import { NavLink, useHistory, useLocation } from "react-router-dom";

// import { toast } from "react-toastify";


import "react-phone-input-2/lib/style.css";

import Logo from "./Logo";
const useStyles = makeStyles((theme) => ({
    mainSignupFrom: {
        padding: "30px 0px",
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1111",
        "& h4": {
            fontSize: "30px",
            marginBottom: "24px",
        },
        "& .logoSection": {
            paddingBottom: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            cursor: "pointer",
        }
    },

    HeaddingBox: {
        marginTop: "5px",
        "@media(max-width:960px)": {
            textAlign: "center",
        },
    },
    formikBox: {
        marginTop: "15px",
    },

    Register: {
        "@media(max-width:960px)": {
            textAlign: "center",
        },
    },


    loginBTN: {
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "23px",
    },

    FormInputField: {
        border: "none",
        color: "#fff",
        background: "none !important",

        "& input": {
            marginTop: "8px",
            background: "none !important",
            marginBottom: "4px",
        },

        "& .MuiOutlinedInput-input": {
            borderRadius: "0px",
            background: "none !important",
        },

        "& svg": {
            color: "#693993",
            cursor: "pointer",

        },
    },








}));

const Signup = () => {
    const classes = useStyles();
    const history = useHistory();

    const location = useLocation();
    const referralCode = location.search.split("?")[1];

    const [isProcessing, setIsProcessing] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [type, setType] = useState("user")

    const urls = window.location.href.split("/register")[0];
    const formInitialSchema = {


        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        type: ""
    };
    const formValidationSchema = yep.object().shape({


        firstname: yep
            .string()
            .required("First name is required.")
            .matches(/^[A-Za-z]+$/, "Only alphabets are allowed.")
            .min(3, "Please enter atleast 3 characters.")
            .max(24, "You can enter only 24 characters."),
        lastname: yep
            .string()
            .required("Last name is required.")
            .matches(/^[A-Za-z]+$/, "Only alphabets are allowed.")
            .min(3, "Please enter atleast 3 characters.")
            .max(24, "You can enter only 24 characters."),
        email: yep
            .string()
            .email("Please enter a valid email address.")
            .required("Email is required."),



        phone: yep
            // .string()
            // .required("Phone number is required.")
            // .max(10, "Should not exceed 10 characters.")
            // .min(10, "Please enter a valid phone number."),
            .string()
            .required("Mobile number is required.")

            .max(13, "Should not exceeds 13 digits.")
            .min(7, "Must be only 7 digits."),
    });
    const handleFormSubmit = async (values) => { };


    return (
        <Box className={classes.mainSignupFrom}>
            <Container maxWidth="lg">
                <Box className="logoSection" onClick={() => history.push("/")}>
                    <Logo />
                </Box>
                <Box className={classes.Register}>
                    <Typography variant="h4">Create your account</Typography>
                </Box>

                <Box className={classes.HeaddingBox}>

                </Box>
                <Box className={classes.formikBox}>
                    <Formik
                        initialValues={formInitialSchema}
                        initialStatus={{
                            success: false,
                            successMsg: "",
                        }}
                        validationSchema={formValidationSchema}
                        onSubmit={(values) => handleFormSubmit(values)}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            touched,
                            values,
                            setFieldValue,
                        }) => (
                            <Form className={classes.root}>
                                <Grid container spacing={2}>


                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <TextField
                                            type="text"
                                            placeholder="First name"
                                            variant="standard"
                                            fullWidth
                                            name="firstname"
                                            id="firstname"
                                            value={values.firstname}
                                            error={Boolean(touched.firstname && errors.firstname)}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className={classes.FormInputField}
                                        />

                                        <FormHelperText error className={classes.helperText}>
                                            {touched.firstname && errors.firstname}
                                        </FormHelperText>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <TextField
                                            type="text"
                                            placeholder="Last name"
                                            variant="standard"
                                            fullWidth
                                            name="lastname"
                                            id="lastname"
                                            value={values.lastname}
                                            error={Boolean(touched.lastname && errors.lastname)}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className={classes.FormInputField}
                                        />

                                        <FormHelperText error className={classes.helperText}>
                                            {touched.lastname && errors.lastname}
                                        </FormHelperText>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <TextField
                                            type="email"
                                            placeholder="Email address"

                                            fullWidth
                                            name="email"
                                            id="email"
                                            value={values.email}
                                            error={Boolean(touched.email && errors.email)}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className={classes.FormInputField}
                                        />

                                        <FormHelperText error className={classes.helperText}>
                                            {touched.email && errors.email}
                                        </FormHelperText>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <TextField
                                            type="number"
                                            placeholder="Enter your mobile no."

                                            fullWidth
                                            name="mobile"
                                            id="mobile"
                                            value={values.mobile}
                                            error={Boolean(touched.mobile && errors.mobile)}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className={classes.FormInputField}
                                        />

                                        <FormHelperText error className={classes.helperText}>
                                            {touched.mobile && errors.mobile}
                                        </FormHelperText>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Select fullWidth value={type}>
                                            <MenuItem value="user">
                                                User
                                            </MenuItem>
                                        </Select>

                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        {errorMsg !== "" && (
                                            <FormHelperText error>{errorMsg}</FormHelperText>
                                        )}
                                        {showSuccessMsg && errorMsg === "" && (
                                            <FormHelperText success style={{ color: "#18dd18" }}>
                                                Please check your mail for verification link.
                                            </FormHelperText>
                                        )}

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            fullWidth
                                            disabled={isProcessing}
                                            style={{ marginTop: "2px" }}
                                        >
                                            <span className={classes.loginBTN}>Register</span>{" "}

                                        </Button>


                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </Box>
    );
};

export default Signup;
