import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignOutContext = createContext();

export const SignOutToastify = ({ children }) => {
  const notify = () =>
    toast.warn("Sign out successfully", {
      position: "top-center",
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <SignOutContext.Provider value={{ notify }}>
        {children}
      </SignOutContext.Provider>
    </>
  );
};

export const SignOutNotify = () => useContext(SignOutContext);
