"use client";

import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";

function Provider({ children, ...props }) {
  const { user } = useUser();

  useEffect(() => {
    if(user) {
      CreateNewUser();
    }
  }, [user])

  const CreateNewUser = async () => {
    const userRef = doc(db, "users", user?.primaryEmailAddress?.emailAddress);

    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      console.log("Existing user");
      return;
    } else {
      const userData = {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        createdAt: new Date(),
        remainingMsg: 5,
        plan: "Free",
        credits: 1000,
      };

      await setDoc(userRef, userData);
      console.log("new user saved")
    }
  };
  return (
    <div>
      <NextThemesProvider {...props}>
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full">
            <AppHeader />
            {children}
          </div>
        </SidebarProvider>
      </NextThemesProvider>
    </div>
  );
}

export default Provider;
