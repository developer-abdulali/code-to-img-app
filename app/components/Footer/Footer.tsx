"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-10">
      <div className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500">
        <span className="pr-2">Developed by</span>
        <span className="pl-1 font-medium text-slate-200">Abdul Ali</span>
      </div>
    </div>
  );
}

export default Footer;
