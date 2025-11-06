import { useState } from 'react';

export const useBalance = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState<boolean>(false);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible((prevState) => !prevState);
  };
  return {
    isBalanceVisible,
    toggleBalanceVisibility,
  };
};
