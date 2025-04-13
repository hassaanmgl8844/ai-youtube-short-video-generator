"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React, { useEffect } from "react";
import Provider, { useAuthContext } from "./provider";
import { useRouter } from "next/navigation";

const ConvexClientProvider = ({ children }) => {
  const  user  = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    user && CheckedUserAuthenticated();
  }, [user]);

  const CheckedUserAuthenticated = () => {
    if (!user) {
      router.replace("/");
    }
  };

  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <div>
      <ConvexProvider client={convex}>
        <Provider>{children}</Provider>
      </ConvexProvider>
    </div>
  );
};

export default ConvexClientProvider;
