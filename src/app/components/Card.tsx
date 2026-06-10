interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Card({ children, onClick, className = '', ...props }: CardProps) {
  return (
    <div
      {...props}
      onClick={onClick}
      className={`
        bg-white rounded-3xl p-7 shadow-lg
        ${onClick ? 'cursor-pointer hover:shadow-xl transition-all active:scale-98' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
