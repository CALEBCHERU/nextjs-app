// src/app/form/formDb/page.tsx (or any component)
// import '../'
'use client';
import React, { useEffect, useState } from 'react';

export default function DisplayForms() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch('/api/formDb')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setForms(data.data);
        }
      });
  }, []);

  return (
    <div className="p-6">
      <style>
        {`
        p{
            color: #000;
        }
        hr{
            color: #000;
        }
        `}
      </style>
      <h2 className="text-xl font-bold mb-4">Submitted Forms</h2>
      <ul className="space-y-3">
        {forms.map((form: any) => (
          <li
            key={form._id}
            className="border p-4 rounded shadow-sm bg-white hover:shadow-md transition"
          >
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Age:</strong> {form.age}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Gender:</strong> {form.gender}</p>
            <p><strong>Bio:</strong> {form.bio}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
