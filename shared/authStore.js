import { create } from "zustand";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase.config"; // use relative path

const googleProvider = new GoogleAuthProvider();

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  googleLogin: async () => {
    set({ loading: true });
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Google login error:", err);
    } finally {
      set({ loading: false });
    }
  },

  logOut: async () => {
    set({ loading: true });
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      set({ loading: false });
    }
  },

  setUser: (user) => set({ user }),

  initAuthListener: () => {
    onAuthStateChanged(auth, (currentUser) => {
      set({ user: currentUser, loading: false });
    });
  },
}));
