import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ResetPasswordContext = createContext();

export const ResetPasswordToastify = ({ children }) => {
  const notify = () =>
    toast.success("Message sent successfully", {
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
      <ResetPasswordContext.Provider value={{ notify }}>
        {children}
      </ResetPasswordContext.Provider>
    </>
  );
};

export const ResetPasswordNotify = () => useContext(ResetPasswordContext);
