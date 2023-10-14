import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUpContext = createContext();

export const SignUpToastify = ({ children }) => {
  const notify = () =>
    toast.success("You have successfully registered", {
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
      <SignUpContext.Provider value={{ notify }}>
        {children}
      </SignUpContext.Provider>
    </>
  );
};

export const SignUpNotify = () => useContext(SignUpContext);
