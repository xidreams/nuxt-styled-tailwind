import { ref } from 'vue';

export function useEmailValidation() {
  const emailPattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';
  const isEmailValid = ref(true);
  const isLengthValid = ref(true);

  const validateEmailPattern = (email: string): boolean => {
    const regex = new RegExp(emailPattern);
    return regex.test(email);
  };

  const validateEmailLength = (email: string): boolean => {
    return email.length < 40;
  };

  const validateEmail = (email: string) => {
    isEmailValid.value = validateEmailPattern(email);
    if (isEmailValid.value) {
      isLengthValid.value = validateEmailLength(email);
    } else {
      isLengthValid.value = true; // Reset length validation if pattern is invalid
    }
  };

  return {
    isEmailValid,
    isLengthValid,
    validateEmail
  };
}
