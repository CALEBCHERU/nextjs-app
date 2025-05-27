"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

export default function Theme() {
  return (
    <div>
      <div className="bg-amber-700 text-3xl p-5 mt-4 mb-4">
        Theme
        <p>this is use to test the useSelectedLayoutSegment(s)</p>
        <Link href={"/dashboard-mini/settings/admin"} className="hover:bg-green-600">
          {" "}
          click this to become a admin
        </Link>
        <br />
        <Link href={"/dashboard-mini/settings/developer"} className="hover:bg-green-600">
          {" "}
          click this to become a Developer
        </Link>
      </div>
    </div>
  );
}
