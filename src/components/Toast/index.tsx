/* eslint-disable no-unused-vars */
import { toast, ToastOptions } from 'react-toastify'

enum ToastType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

function Toast(message: string, type: ToastType) {
  const config: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  }

  switch (type) {
    case ToastType.INFO: {
      toast.info(message, config)
      break
    }
    case ToastType.SUCCESS: {
      toast.success(message, config)
      break
    }
    case ToastType.WARNING: {
      toast.warning(message, config)
      break
    }
    case ToastType.ERROR: {
      toast.error(message, config)
      break
    }
    default: {
      toast.info(message, config)
      break
    }
  }
}

export { Toast, ToastType }
