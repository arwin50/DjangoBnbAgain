"use client";
import React from "react";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div
      className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer text-center ${className}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
