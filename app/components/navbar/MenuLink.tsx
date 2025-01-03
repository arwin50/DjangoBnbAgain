"use client";

interface MenuLinkProps {
  label: string;
  onClick?: () => void;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ label, onClick }) => {
  return (
    <div className="px-5 py-4 hover:bg-gray-100 transition " onClick={onClick}>
      {label}
    </div>
  );
};
