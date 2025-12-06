"use client";

import { useClerk, UserAvatar, useUser } from "@clerk/nextjs";
import { Button } from "@mui/material";
import Image from "next/image";

export default function AuthButtons() {
  const { openSignIn, signOut } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <>
      {!isSignedIn && user === null && (
        <Button
          color="inherit"
          startIcon={
            <Image
              src="/google-icon.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
          }
          onClick={() => openSignIn()}
        >
          Sign in
        </Button>
      )}

      {isSignedIn && (
        <Button
          color="inherit"
          startIcon={<UserAvatar />}
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      )}
    </>
  );
}
