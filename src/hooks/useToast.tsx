import toast from "react-hot-toast";

export const useCustomToast = () => {
  const showSuccessToast = (message: string) =>
    toast.success(message, { position: "top-right", duration: 4000 });
  const showErrorToast = (message: string) =>
    toast.error(message, { position: "top-right", duration: 4000 });

  return { showSuccessToast, showErrorToast };
};
