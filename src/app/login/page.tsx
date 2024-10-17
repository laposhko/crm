'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputField from '../components/input-field';
import Button from '../components/button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useRouter } from 'next/navigation';
export interface PageProps {}
const validationSchema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
});
export default function Page({}: PageProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <ToastContainer></ToastContainer>
      <h1 className="text-3xl font-semibold text-gray-900">Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema} // Optional: validation with Yup
        onSubmit={async (values, { setSubmitting }) => {
          // Submit form values
          console.log('Form values:', values);
          try {
            console.log('try');
            const userCredential = await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            const user = userCredential.user;
            console.log('Logged in user:', user);
            router.push('/dashboard');
          } catch (err) {
            console.log('error', err);
          }
          setSubmitting(false);
          // toast('Successfully login ');
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="relative">
              <InputField
                label="email"
                id="email"
                placeholder="Email"
                name="email"
              ></InputField>
              {/* <label htmlFor="username">Username</label>
              <Field type="username" name="username" />
              <ErrorMessage name="username" component="div" /> */}
              <ErrorMessage
                className="absolute text-red-700 bottom-2 right-2 text-xs"
                name="email"
                component="div"
              />
            </div>

            <div className="relative">
              <InputField
                type="password"
                label="password"
                id="password"
                placeholder="Password"
                name="password"
              ></InputField>
              <ErrorMessage
                className="absolute text-red-700 bottom-2 right-2 text-xs"
                name="password"
                component="div"
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
