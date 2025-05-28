import Link from "next/link";
import React from "react";

export default function Settings() {
  return (
    <div className="text-2xl text-emerald-800 m-3">
      this Settings page inside the @team folder.
      <br />
      <p className="font-bold">
        try to do a hard reload .some default pages shall appear
      </p>
      <Link href={"../dashboard-mini"} className="hover:bg-[#383838]">
        go back to the mini-darshboard
      </Link>
      <div className="border-solid border-4 border-red-600">
        This is use to text the <span className="text-red-600">useSelectedLayoutSegment(s) </span> 
        look at the above

        <br />
        <Link href={"/dashboard-mini/settings/theme"} className="hover:bg-[#383838]">
          Go to the <span className="text-amber-600 font-bold">theme page</span> 
        </Link>
      </div>
    </div>
  );
}
