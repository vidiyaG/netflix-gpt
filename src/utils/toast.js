import { toast } from "react-toastify";
export const showToast = (msg, type) => {
    const toastConfig = {
        position: "top-right",
    };
    switch (type) {
        case "error":
            toast.error(msg, toastConfig);
            break;
        case "success":
            toast.success(msg, toastConfig);
            break;
        case "warn":
            toast.warn(msg, toastConfig);
            break;
        case "info":
            toast.info(msg, toastConfig);
            break;
    }
};
