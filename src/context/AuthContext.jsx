import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiRequest } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(Boolean(localStorage.getItem("techItGoToken")));

  useEffect(() => {
    function handleSessionExpired() {
      setUser(null);
    }

    window.addEventListener("techItGoSessionExpired", handleSessionExpired);

    async function loadUser() {
      const token = localStorage.getItem("techItGoToken");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await apiRequest("/auth/me");
        setUser(data.user);
      } catch {
        localStorage.removeItem("techItGoToken");
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();

    return () => {
      window.removeEventListener("techItGoSessionExpired", handleSessionExpired);
    };
  }, []);

  async function register(formData) {
    const data = await apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    localStorage.setItem("techItGoToken", data.token);
    setUser(data.user);
    return data.user;
  }

  async function login(formData) {
    const data = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    localStorage.setItem("techItGoToken", data.token);
    setUser(data.user);
    return data.user;
  }

  function logout() {
    localStorage.removeItem("techItGoToken");
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      loading,
      isLoggedIn: Boolean(user),
      isStaff: user?.role === "staff",
      register,
      login,
      logout,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}
