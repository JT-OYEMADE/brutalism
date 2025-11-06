export type LayoutProps = {
  children: React.ReactNode;
};

type BaseInputProps = {
  id: string;
  label?: string | React.ReactNode;
  error?: any;
  width?: string;
  showOptional?: boolean;
  required?: boolean;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
  isPhoneInput?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  [key: string]: any;
  nextLabelCTA?: any;
  onNextClick?: () => void;
};
export type TextfieldProps = BaseInputProps & {
  type?: string;
  prefixIcon?: any;
  surfixIcon?: any;
  width?: string;
};

export interface SelectfieldOptions {
  label: string;
  value: string | number;
}

export interface SelectfieldProps {
  id: string;
  options: SelectfieldOptions[];
  className?: string;
}

export interface TableColumn {
  label: string;
  key?: string;
  formatter?: (value: any) => any;
  rowFormatter?: (data: any) => void;
  className?: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: any;
  onRowClick?: (row: any) => void;
  actions?: (row: any) => React.ReactNode;
}
