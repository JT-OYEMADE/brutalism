import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit: any = ({ email, password }: LoginFormData) => {
    console.log({ email, password }, 'login');

    navigate('/');
  };

  watch((data) => {
    const { email, password } = data;
    setIsFormValid(!!email && !!password);
  });

  return {
    errors,
    onSubmit,
    isFormValid,
    isPasswordVisible,
    register,
    setValue,
    handleSubmit,
    setIsPasswordVisible,
  };
};
