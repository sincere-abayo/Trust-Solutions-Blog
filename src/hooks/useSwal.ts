import { useCallback } from 'react';
import Swal from 'sweetalert2';

export const useSwal = () => {
  const showSuccess = useCallback((title: string, text?: string) => {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      confirmButtonColor: '#10B981',
      timer: 3000,
      timerProgressBar: true,
    });
  }, []);

  const showError = useCallback((title: string, text?: string) => {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonColor: '#EF4444',
    });
  }, []);

  const showWarning = useCallback((title: string, text?: string) => {
    return Swal.fire({
      icon: 'warning',
      title,
      text,
      confirmButtonColor: '#F59E0B',
    });
  }, []);

  const showConfirm = useCallback((title: string, text?: string) => {
    return Swal.fire({
      icon: 'question',
      title,
      text,
      showCancelButton: true,
      confirmButtonColor: '#3B82F6',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    });
  }, []);

  const showLoading = useCallback((title: string = 'Processing...') => {
    return Swal.fire({
      title,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }, []);

  const close = useCallback(() => {
    Swal.close();
  }, []);

  return {
    showSuccess,
    showError,
    showWarning,
    showConfirm,
    showLoading,
    close,
  };
};