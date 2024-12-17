import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import Button from './button';
import InputField from './input-field';
import LogoUploader from './logo-uploader';
import { CompanyStatus, getCategories, getCountries } from '@/lib/api';
// import { createCompany, Company } from '@/lib/api';
import { nanoid } from 'nanoid';
import { Category, Country } from '@/lib/api';
export type CompanyFieldValues = {
  name: string;
  status: CompanyStatus | '';
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  // onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}
type Item = {
  title: string;
  id: string;
};
export default async function CompanyForm({}: CompanyFormProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Fetch categories and countries asynchronously
    const fetchData = async () => {
      const fetchedCategories = await getCategories();
      const fetchedCountries = await getCountries();
      setCategories(fetchedCategories);
      setCountries(fetchedCountries);
    };
    fetchData();
  }, []);
  const findIdByTitle = <T extends Item>(
    items: T[],
    title: string
  ): string | null => {
    const foundItem = items.find((item) => item.title === title);
    return foundItem ? foundItem.id : null; // Returns null if no match is found
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        const newCompany = {
          id: nanoid(),
          title: values.name,
          description: values.description,
          status: values.status,
          joinedDate: values.date,
          hasPromotions: false,
          categoryId: findIdByTitle(categories, values.category),
          categoryTitle: values.category,
          countryId: findIdByTitle(countries, values.country),
          countryTitle: values.country,
          // avatar?: string;
        };
        console.log(newCompany);
        // createCompany(newCompany);
      }}
    >
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Status" name="status" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Name" name="name" />
            <InputField
              label="Category"
              placeholder="Category"
              name="category"
            />
            <InputField label="Joined date" type="date" name="date" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
