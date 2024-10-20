'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/redux/auth/operations';
import { Form, Formik } from 'formik';
import Button from './button';
import InputField from './input-field';
import { Field } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
export interface SettingsFormProps {}
export type SettingsFieldValues = {
  name: string;
  image: File | null;
};

export default function SettingsForm({}: SettingsFormProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const initialValues: SettingsFieldValues = {
    name: '',
    image: null,
  };
  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFieldValue('image', file); // Set image file in Formik's state
    }
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <h1 className="mb-5 text-xl">Profile settings</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          if (values.name && values.image) {
            try {
              dispatch(updateUser(values));
              router.back();
            } catch (error) {
              toast.error('Something went wrong..Please try again');
            } finally {
              setSubmitting(false);
            }
          } else {
            toast.error('Form cannot be empty');
          }
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            <div className="relative">
              <InputField
                placeholder="Name"
                id="name"
                name="name"
                label="name"
              ></InputField>
              {/* <ErrorMessage
                name="name"
                component="div"
                className="text-red-700 text-sm mt-1"
              /> */}
            </div>

            {/* Image Upload field */}
            <div className="relative">
              <label htmlFor="image" className="block text-sm font-medium">
                Upload Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(event, setFieldValue)}
              />
              {/* <ErrorMessage
              name="image"
              component="div"
              className="text-red-700 text-sm mt-1"
            /> */}
              {selectedImage && (
                <div className="mt-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="h-32 w-32 object-cover mt-2"
                  />
                </div>
              )}
            </div>
            <Button disabled={isSubmitting}>Submit</Button>
            {/* Submit button
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button> */}
          </Form>
        )}
      </Formik>
    </>
  );
}
