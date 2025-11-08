const Button = ({
  prefixIcon,
  label,
  className,
}: {
  prefixIcon?: React.ReactElement;
  label: string | any;
  className?: string;
}) => {
  return (
    <button
      className={`bg-[#D7F995] rounded w-full py-3 text-xs lg:text-base font-medium flex items-center justify-center md:gap-2 hover:bg-gray-300 transition-all duration-700 ease-[cubic-bezier(0.2,1,0.22,1)] border border-[#818379] hover:-translate-y-[1.5px] ${className}`}>
      {prefixIcon} {label}
    </button>
  );
};

export default Button;
