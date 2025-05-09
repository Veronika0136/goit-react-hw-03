import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  const initialValues = { name: '', number: '', id: '' };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.err} name="name" component="p" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage className={s.err} name="number" component="p" />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
