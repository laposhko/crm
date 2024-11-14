'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import InputField from '../components/input-field';
import Button from '../components/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export interface PageProps {}
export type LoginFieldValues = {
  email: string;
  password: string;
};

const initialValues: LoginFieldValues = {
  email: '',
  password: '',
};
const validationSchema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
});

export default function Page({}: PageProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8 relative">
      <ToastContainer></ToastContainer>
      <h1 className="text-3xl font-semibold text-gray-900">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // Optional: validation with Yup
        onSubmit={async (values, { setSubmitting }) => {
          console.log('Form values:', values);
          try {
            console.log('try');
            dispatch(logIn(values));
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
                type={showPassword ? 'text' : 'password'}
                label="password"
                id="password"
                placeholder="Password"
                name="password"
              ></InputField>

              <Image
                className="cursor-pointer absolute top-[33%] right-2"
                onClick={() => setShowPassword(!showPassword)}
                width={16}
                height={16}
                src={`/icons/${showPassword ? 'hide-pass' : 'show-pass'}.svg`}
                alt="password icon"
              />
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
      <div className="absolute bottom-10 right-10 p-10 bg-yellow-100">
        <b>login details for testing:</b> <br /> email: admin@admin.com <br />
        password: adminadmin
      </div>
    </div>
  );
}
