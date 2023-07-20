/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from "formik"
import React from "react"
import { signUpSchema } from "./schemas"

export default function Registration() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  }
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm() //to remove entered values in a form
    },
  })
  // console.log(Formik)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    Formik

  console.log(errors)
  return (
    <>
      <div className="">
        <h1 className="text-center">Welcome!</h1>
        <p className="text-center">Form Validation</p>
        <form onSubmit={handleSubmit} style={{ width: "50%" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              className="form-control"
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="text-danger">{errors.name}</p>
            ) : null}
          </div>
          <div className="input-block">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-danger">{errors.email}</p>
            ) : null}
          </div>
          <div className="input-block">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-danger">{errors.password}</p>
            ) : null}
          </div>
          <div className="input-block">
            <label htmlFor="confirm_password" className="form-label">
              Confirm Password
            </label>
            <input
              className="form-control"
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-danger">{errors.confirm_password}</p>
            ) : null}
          </div>
          <div className="modal-buttons">
            <a href="#" className="">
              Want to register using Gmail?
            </a>
            <button className="btn btn-primary" type="submit">
              Registration
            </button>
          </div>
        </form>
        <p className="sign-up">
          Already have an account? <a href="#">Sign In now</a>
        </p>
      </div>
    </>
  )
}
