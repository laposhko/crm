'use client';

import React from 'react';
import { Field, FieldAttributes } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Pick<FieldAttributes<string>, 'as'> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-column">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900"></label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      ></Field>
    </div>
  );
}
