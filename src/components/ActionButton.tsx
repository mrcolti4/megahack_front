import { ReactNode } from "react";

export default function ActionButton({
  disabled,
  children,
  onClick,
}: {
  disabled: boolean;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="active:bg-blue-700/50 cursor-pointer mt-4 px-4 py-2 bg-blue-600 text-white rounded"
    >
      {children}
    </button>
  );
}
