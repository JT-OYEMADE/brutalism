const Button = ({ prefixIcon, label }: { prefixIcon: React.ReactElement; label: string }) => {
  return (
    <button className='bg-gray-100 rounded-lg w-full py-3 text-sm lg:text-lg font-medium flex items-center justify-center gap-1 hover:bg-gray-300 transition-colors transition-all duration-700 ease-[cubic-bezier(0.2,1,0.22,1)] hover:-translate-y-[1.5px]'>
      {prefixIcon} {label}
    </button>
  );
};

export default Button;
