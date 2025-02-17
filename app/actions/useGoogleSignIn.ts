import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export const useGoogleSignIn = (signIn: any) => {
  const { googleSignIn } = useContext(AuthContext);
  
  if (!googleSignIn) {
    throw new Error("googleSignIn is not defined in context");
  }

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return { handleGoogleSignIn };
};
