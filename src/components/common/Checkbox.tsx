import type { CheckboxProps } from '../../types';

export const Checkbox = ({
  label,
  id,
  checked,
  register,
  disabled,
  className,
  labelClassName,
  error,
  variant = 'primary',
  onChange,
  onClick,
}: CheckboxProps) => {
  return (
    <>
      <div className={`flex items-center justify-between w-full ${className}`}>
        <input
          id={id}
          name={id}
          type='checkbox'
          className={`form-checkbox order-1 cursor-pointer border-[1.5px]  bg-white !shadow-custom-sm !h-3 !w-3 !rounded-[4px]  ${
            variant === 'primary'
              ? '!text-primary border-[#16266452]'
              : '!text-gray border-[#1B1C1D1F]'
          } focus:!ring-0 focus:!outline-none`}
          checked={Boolean(checked)}
          disabled={disabled}
          {...(register ? register(id) : {})}
          onChange={onChange ? onChange : () => {}}
          onClick={onClick}
        />
        <div>
          {label && (
            <label htmlFor={id} className={`block text-sm text-gray-dark ${labelClassName}`}>
              {label}
            </label>
          )}
        </div>
      </div>
      {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}
    </>
  );
};
