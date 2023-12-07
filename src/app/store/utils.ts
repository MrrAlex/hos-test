export const successMessage = (successMessage: string | null) => ({
  loading: false,
  success: true,
  successMessage,
});

export const errorMessage = (errorMessage: string, messageString: string) => {
  return {
    loading: false,
    success: false,
    errorMessage: errorMessage + ' ' + messageString ?? '',
  };
};
