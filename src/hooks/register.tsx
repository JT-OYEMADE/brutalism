import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface RegisterFormData {
  businessName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  address: string;
  password: string;
  confirmPassword: string;
}

export const useRegister = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
  });

  const onSubmit: any = ({
    businessName,
    email,
    phone,
    country,
    state,
    address,
    password,
    confirmPassword,
  }: RegisterFormData) => {
    console.log(
      { businessName, email, phone, country, state, address, password, confirmPassword },
      'register'
    );
    navigate('/login');
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    isPasswordVisible,
    setIsPasswordVisible,
    isConfirmPasswordVisible,
    setIsConfirmPasswordVisible,
  };
};
