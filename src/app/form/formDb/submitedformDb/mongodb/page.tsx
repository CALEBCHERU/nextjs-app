'use client';

import React, { useEffect,useState } from 'react';
import Link from 'next/link';
import './lib/formDb.css'
import { useRouter } from 'next/navigation';

export default function FormDb() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    gender: '',
    bio: '',
  });
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
// C:\Users\khale\Documents\projects\nextjs-app\src\app\api\formDb\submit.ts
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data set to the api")
    const res = await fetch('http://localhost:3000/api/formDb/mongodb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      // alert('Form submitted!');
      setForm({ name: '', age: '', email: '', gender: '', bio: '' });
      // router.push('/form/submitedformDb')
      
    } else {
      alert('Submission failed!');
    }
  };


  return (
    <div className="form-container">
      <style>
    {`
        label{
            color: #000;
            font-size: larger;
            font-weight: bolder;
        }
        input{
              color: #000;
          }
        .form-container {
          max-width: 400px;
          margin: 40px auto;
          padding: 30px;
          background-color: #f9f9f9;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .form-container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .form-content {
          display: flex;
          flex-direction: column;
        }

        .form-content label {
          margin-top: 10px;
          font-weight: bold;
        }

        .form-content input,
        .form-content select,
        .form-content textarea {
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          color: #000;
        }

        .form-content button {
          margin-top: 20px;
          padding: 12px;
          background-color: #6c63ff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .form-content button:hover {
          background-color: #5848e0;
        }

        `}
      </style>
      <h2 style={{fontWeight:'bolder',fontSize:'larger',color:'red'}}>Submit Your Details</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required  placeholder="Enter your name" />

        <label>Age:</label>
        <input name="age" type="number" value={form.age} onChange={handleChange} required placeholder="Enter your Age" />

        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required  placeholder="Enter your Email"/>

        <label>Gender:</label>
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Bio:</label>
        <textarea name="bio" value={form.bio} onChange={handleChange} />

        <button type="submit" rows="4" placeholder="Tell us about yourself...">Submit</button>
      </form>
      <Link href='./formDb/submitedformDb/mongodb'  > <span id='link'>Submitted Mongo Forms</span> </Link>
      <br />
      <Link href='./formDb/submitedformDb/postgres'  > <span id='link'>Submitted postgres Forms</span> </Link>
    </div>
  );
}
