// app/dashboard/template.jsx
'use client'; // required if you use useEffect or other client logic

import { useEffect } from 'react';

export default function DashboardTemplate({ children }) {
  useEffect(() => {
    console.log("🚀 Template mounted!");
    return () => {
      console.log("❌ Template unmounted!");
    };
  }, []);
/* 
This will remount every time you navigate between /dashboard and /dashboard/settings.
Useful for resetting animations, state, or UI effects between routes.
*/
  return (
    <div className="border border-blue-500 p-4 ">
      <p>This is a template. Reloads every route change inside /dashboard.</p>
      {children}
    </div>
  );
}
