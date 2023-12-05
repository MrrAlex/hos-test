export const successMessage = (successMessage: string | null) => ({
  loading: false,
  success: true,
  errorMessage: null,
  successMessage,
});

export const errorMessage = (errorMessage: string) => ({
  loading: false,
  success: false,
  successMessage: null,
  errorMessage,
});
