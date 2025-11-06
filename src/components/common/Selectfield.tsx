import { cn } from 'lib/constants/utils';
import type { SelectfieldOptions, SelectfieldProps } from 'types';

const Selectfield: React.FC<SelectfieldProps> = ({ id, options, className, ...rest }) => {
  const selectfieldBaseClass =
    'bg-transparent border-none text-gray-700 text-sm text-white focus:outline-none focus:border-transparent focus:ring-0';

  const selectfieldClasses = cn(selectfieldBaseClass, className);

  return (
    <select id={id} name={id} className={selectfieldClasses} {...rest}>
      {options?.map(({ label, value }: SelectfieldOptions) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Selectfield;
