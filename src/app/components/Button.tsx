interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'emergency' | 'success';
  size?: 'large' | 'medium';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'large',
  fullWidth = false,
  icon
}: ButtonProps) {
  const baseClasses = "rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95";

  const variantClasses = {
    primary: "bg-[#4A90E2] text-white shadow-lg hover:bg-[#357ABD]",
    secondary: "bg-white text-[#4A90E2] border-4 border-[#4A90E2] shadow-md hover:bg-[#F0F7FF]",
    emergency: "bg-[#FF6B6B] text-white shadow-lg hover:bg-[#E85555]",
    success: "bg-[#51C878] text-white shadow-lg hover:bg-[#40A060]"
  };

  const sizeClasses = {
    large: "px-8 py-6 text-2xl min-h-[80px]",
    medium: "px-6 py-4 text-xl min-h-[64px]"
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {icon && <span className="text-3xl">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
