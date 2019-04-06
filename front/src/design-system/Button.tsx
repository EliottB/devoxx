import * as React from 'react';
export interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}
const noop = () => {};
export const Button = (props: Props) => {
  const { children, onClick, disabled = false } = props;
  const disabledclass = disabled ? 'Button_disabled' : '';
  return (
    <button
      className={`Button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      {children}
    </button>
  );
};
