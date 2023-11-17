import React from "react";

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="bg-yellow-300 p-2 rounded" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
