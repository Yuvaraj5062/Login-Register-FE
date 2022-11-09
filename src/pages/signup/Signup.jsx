import React from "react";
// import { useForm } from "react-hook-form";
import styles from "./signup.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { clearState, register } from "../../redux/Auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Signup = () => {

const dispatch = useDispatch()

const { loading ,message ,status} = useSelector((state) => state.auth);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Full Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
   
});

  const onSubmit = (values) => {
    dispatch(register(values))
  };
useEffect(()=>{
  dispatch(clearState())
},[])
useEffect(()=>{
      setTimeout(()=>{
          dispatch(clearState())
      },5000)
    },[message])

  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.title}>Sign Up</h1>
      <Formik
        initialValues={{
          firstName:'',
          lastName:'',
          email: "",
          password: "",
          confirmPassword:''
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className={styles.formik}
      >
        <Form className={styles.form}>
          <span className={styles.errorMessage}>{message}</span>
          <div className={styles.row}>
            <label for="text">First Name</label>
            <Field
              className={styles.inputField}
              type="text"
              name="firstName"
              autocomplete="off"
              placeholder="Pihoo"
            />
            <ErrorMessage name="firstName" className={styles.errorCode} />
          </div>
          <div className={styles.row}>
            <label for="text">Last Name</label>
            <Field
              className={styles.inputField}
              type="text"
              name="lastName"
              autocomplete="off"
              placeholder="Pihoo"
            />
            <ErrorMessage name="lastName" className={styles.errorCode} />
          </div>
          <div className={styles.row}>
            <label for="email">Email</label>
            <Field
              className={styles.inputField}
              type="text"
              name="email"
              autocomplete="off"
              placeholder="email@example.com"
            />
            <ErrorMessage name="email" className={styles.errorCode} />
          </div>
          <div className={styles.row}>
            <label for="password">Password</label>
            <Field
              className={styles.inputField}
              type="password"
              name="password"
            />
            <ErrorMessage name="password" className={styles.errorCode}/>
          </div>
          <div className={styles.row}>
            <label for="password">Confirm Password</label>
            <Field
              className={styles.inputField}
              type="password"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" className={styles.errorCode}/>
          </div>

          <button type="submit" disabled={loading}>Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
