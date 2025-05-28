'use client'
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import { useCurrentUrl } from './useCurrentUrl'; // adjust the path accordingly


export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  const currentUrl = useSelectedLayoutSegment('team');
  const currentUrls = useSelectedLayoutSegments('team');
  

  return (
    <>
    <p className='text-3xl font-bold text-red-700'>useSelectedLayoutSegment(s)</p>
    <p className='text-xl font-bold text-red-700'>testing the useSelectedLayoutSegment(s)</p>
      <p className='text-3xl text-gray-700 font-bold'>
        current Selected url page: <span className='text-green-600'>{currentUrl}</span> 
      </p>
      <p className='text-3xl text-gray-700 font-bold'>
        Segments of URLs: <span className='text-green-600'>{currentUrls.join(' / ')}</span> 
      </p>
      {children}
      {team}
      {/* the below is to test the useSelectedLayoutSegment(s) */}
      <div className={currentUrl === "admin"?  'bg-green-600 m-3 text-2xl font-bold text-gray-900 p-4' :  ""}>
        {currentUrl === "admin"? "hey u are an admin" :  ""}
      </div>
      <div className={currentUrl === "developer"?  'bg-green-600 m-3 text-2xl font-bold text-gray-900 p-4' :  ""}>
        {currentUrl === "developer"? "hey u are a Developer" :  ""}
      </div>
      {/* <div className='bg-green-600 m-3 text-2xl font-bold text-gray-900 p-4'>{currentUrl === "developer"? "" :  ""}</div> */}
      
      {analytics}
    </>
  );
}
