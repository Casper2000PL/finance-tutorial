import React from "react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="text-3xl font-bold text-[#2E2A47]">Welcome back</h1>
          <p className="text-base text-[#6B7280]">
            Log in or Create account to get back to your dashboard.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default SignUpPage;
