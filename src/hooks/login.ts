import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { login } from 'lib/actions/user';

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

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      navigate('/');
    },
    onError: (error: unknown) => {
      console.log(error);
    },
  });

  const onSubmit: any = (values: LoginFormData) => {
    loginMutation.mutateAsync({
      email: values.email,
      password: values.password,
    });
  };

  watch((data) => {
    const { email, password } = data;
    setIsFormValid(!!email && !!password);
  });

  return {
    errors,
    onSubmit,
    isFormValid,
    loginMutation,
    isPasswordVisible,
    register,
    setValue,
    handleSubmit,
    setIsPasswordVisible,
  };
};
