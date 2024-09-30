"use client";
import React from 'react';
import { signOut } from "next-auth/react";

const SignoutButton = () => {
  return (
    <button type="button" onClick={() => signOut()}>
      Sign iut 
    </button>
  );
};

export default SignoutButton;
