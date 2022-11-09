import React from "react";
import styles from "./login.module.scss";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { clearState, login } from "../../redux/Auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { loading ,message ,status} = useSelector((state) => state.auth);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const onSubmit = (values) => {
    dispatch(login(values))
  };
  useEffect(()=>{
          if(status===200 ){
            dispatch(clearState())
            navigate('/home')
          }else{
            setTimeout(()=>{
              dispatch(clearState())
            },5000)
          }
  },[message])
  useEffect(()=>{
    dispatch(clearState())
    localStorage.clear()
    },[])

  


  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Login</h1>
      
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className={styles.formik}
      >
        
        <Form className={styles.form}>
        <span className={styles.errorMessage}>{message}</span>
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
            <ErrorMessage name="password" />
          </div>
          <button type="submit" disabled={loading}>Login</button>
          {/* <button type="submit">Sign Up</button> */}
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
