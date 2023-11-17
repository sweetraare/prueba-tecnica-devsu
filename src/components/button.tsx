import React from "react";

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

function Button({ label, onClick, type, ...props }: ButtonProps) {
  return (
    <button
      className="bg-yellow-300 p-2 rounded"
      onClick={onClick}
      type={type}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
