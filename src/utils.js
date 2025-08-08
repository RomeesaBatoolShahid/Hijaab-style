import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
  toast.dismiss(); // close previous toasts
  toast.success(msg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
  });
};

export const handleError = (msg) => {
  toast.dismiss();
  toast.error(msg, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
  });
};
