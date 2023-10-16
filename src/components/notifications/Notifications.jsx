import { createContext, memo, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NotificationsContext = createContext();

const Notifications = ({ children }) => {
  const notify = (position, type, theme, message) => {
    const location = position;
    if (type === "info" && theme === "light") {
      return toast.info(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "info" && theme === "dark") {
      return toast.info(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (type === "info" && theme === "colored") {
      return toast.info(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (type === "success" && theme === "light") {
      return toast.success(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "success" && theme === "dark") {
      return toast.success(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (type === "success" && theme === "colored") {
      return toast.success(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (type === "warning" && theme === "light") {
      return toast.warn(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "warning" && theme === "dark") {
      return toast.warn(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (type === "warning" && theme === "colored") {
      return toast.warn(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (type === "error" && theme === "light") {
      return toast.error(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "error" && theme === "dark") {
      return toast.error(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (type === "error" && theme === "colored") {
      return toast.error(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (type === "default" && theme === "light") {
      return toast(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "default" && theme === "dark") {
      return toast(message, {
        position: location,
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer
        autoClose={1700}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NotificationsContext.Provider value={{ notify }}>
        {children}
      </NotificationsContext.Provider>
    </>
  );
};

export default memo(Notifications);

export const useNotifications = () => useContext(NotificationsContext);
