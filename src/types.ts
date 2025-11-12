export type LayoutProps = {
  children?: React.ReactNode;
};

export interface queryData {
  page: number;
  limit: number;
}

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

export interface CheckboxProps {
  label?: string;
  id?: string;
  checked?: boolean;
  register?: any;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
  error?: any;
  variant?: 'primary' | 'secondary';
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface Email {
  sender: string;
  subject: string;
  timestamp: string;
  starred: boolean;
}

export interface EmailListProps {
  emails: Email[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  totalEmails: number;
  onPageChange: (page: number) => void;
}
