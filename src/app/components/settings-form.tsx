'use client';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { updateUser } from '@/redux/auth/operations';
import { Form, Formik } from 'formik';
import Button from './button';
import InputField from './input-field';
import { Field } from 'formik';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '@/redux/auth/selectors';
import { toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';

export interface SettingsFormProps {}
export type SettingsFieldValues = {
  name: string;
  image: File | null;
};

export default function SettingsForm({}: SettingsFormProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const user = useSelector(selectAuthUser);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const initialValues: SettingsFieldValues = {
    name: '',
    image: null,
  };
  const handleClick = () => {
    console.log('image click!');
    fileInputRef.current?.click();
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
  const handleImageUpload = async (image: File) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'TruScape'); // Replace with your preset name
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dh0rwto3l/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <h1 className="mb-5 text-xl">Profile settings</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          let photoURL;
          if (values.image) {
            photoURL = await handleImageUpload(values.image);
          }

          if (values.name || values.image) {
            try {
              dispatch(
                updateUser({
                  name: values.name,
                  image: photoURL,
                })
              );
              router.back();
            } catch (error) {
              toast.error('Something went wrong..Please try again');
            } finally {
              setSubmitting(false);
            }
          } else {
            toast.error('Form cannot be empty');
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              {/* Image Upload field */}
              <div className="relative ">
                {/* Image Preview */}
                <Image
                  src={
                    selectedImage ||
                    user?.photoURL ||
                    '/images/default-avatar.png'
                  }
                  alt="Selected"
                  width={100}
                  height={100}
                  onClick={handleClick}
                  className="h-32 w-32 object-cover mt-2 rounded-full cursor-pointer"
                />
                {/* <label htmlFor="image" className="block text-sm font-medium">
                Upload Image
              </label> */}
                <input
                  ref={fileInputRef}
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                />
                {/* <ErrorMessage
              name="image"
              component="div"
              className="text-red-700 text-sm mt-1"
            /> */}
              </div>
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
            </div>

            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
