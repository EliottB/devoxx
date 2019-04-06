import * as React from 'react';
export interface Props {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
}
const Input = (props: Props) => {
  const { onChange, value, placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      type="text"
      onChange={({ target: { value } }) => onChange(value)}
      value={value || ''}
    />
  );
};

export default Input;
