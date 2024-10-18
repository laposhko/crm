'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/redux/auth/operations';
import { Form, Formik } from 'formik';
import Button from './button';
import InputField from './input-field';
import { toast, ToastContainer } from 'react-toastify';
export interface SettingsFormProps {}
export type SettingsFieldValues = {
  name: string;
};

const initialValues: SettingsFieldValues = {
  name: '',
};

export default function SettingsForm({}: SettingsFormProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      <ToastContainer></ToastContainer>
      <h1 className="mb-5 text-xl">Profile settings</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
          if (values.name) {
            try {
              dispatch(updateUser(values));
              router.back();
            } catch (error) {
              toast.error('Something went wrong..Please try again');
            }
          } else {
            toast.error('Form cannot be empty');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="relative">
              <InputField
                label="name"
                id="name"
                placeholder="Name"
                name="name"
              ></InputField>
              {/* <ErrorMessage
                className="absolute text-red-700 bottom-2 right-2 text-xs"
                name="email"
                component="div"
              /> */}
            </div>

            {/* <div className="relative">
              <InputField
                type="password"
                label="password"
                id="password"
                placeholder="Password"
                name="password"
              ></InputField> */}
            {/* <ErrorMessage
                className="absolute text-red-700 bottom-2 right-2 text-xs"
                name="password"
                component="div"
              /> */}
            {/* </div> */}
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
