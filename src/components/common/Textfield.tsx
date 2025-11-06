import { cn } from 'lib/constants/utils';
import { CiSearch } from 'react-icons/ci';
import type { TextfieldProps } from 'types';

export const Textfield = ({
  type = 'text',
  id,
  ref,
  label,
  error,
  disabled = false,
  required,
  prefixIcon,
  surfixIcon,
  width,
  placeholder,
  register,
  className,
  hasError,
  showOptional,
  searchField,
  onChange,
  labelClassName,
  nextLabelCTA,
  onNextClick,
  ...rest
}: TextfieldProps) => {
  const textfieldBaseClass = `block w-full rounded-lg border-0 py-2.5 ring-1 placeholder:text-[#CDD0D5] shadow-sm ring-1 ring-inset ring-gray focus:outline-none focus:ring-1 focus:ring-primary text-sm leading-6 ${width} disabled:bg-gray-lighter disabled:text-gray-400 disabled:cursor-not-allowed`;

  const textfieldState = error || hasError ? 'ring-red-500' : 'ring-gray';

  const newSurfixIcon = searchField ? (
    <CiSearch className='text-gray-400 h-5 w-5' aria-hidden='true' />
  ) : (
    surfixIcon
  );

  const textfieldClasses = cn(
    textfieldBaseClass,
    textfieldState,
    prefixIcon ? 'pl-10' : 'px-3',
    newSurfixIcon ? 'pr-10' : 'pr-3',
    className
  );

  return (
    <div>
      <div className='flex justify-between'>
        {typeof label === 'string' ? (
          <label htmlFor={id} className={`block text-gray-light text-sm  ${labelClassName}`}>
            {label}{' '}
            {!required && showOptional && <span className='text-gray-400'>(Optional)</span>}{' '}
            {required && <span className='text-red-500'>*</span>}
          </label>
        ) : (
          label
        )}
        {nextLabelCTA && (
          <div className='text-primary text-sm cursor-pointer' onClick={onNextClick}>
            {nextLabelCTA}
          </div>
        )}
      </div>

      <div className='mt-1 relative rounded-lg'>
        {!!prefixIcon && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            {prefixIcon}
          </div>
        )}

        {newSurfixIcon && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            {newSurfixIcon}
          </div>
        )}
        <div className='flex'>
          <input
            id={id}
            ref={ref}
            type={type}
            disabled={disabled}
            placeholder={searchField ? 'Search' : placeholder}
            onChange={onChange}
            {...(register ? register(id) : {})}
            {...rest}
            className={textfieldClasses}
          />
        </div>
      </div>

      {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}
    </div>
  );
};
