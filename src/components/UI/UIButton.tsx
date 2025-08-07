interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link' | 'landing' | 'transparent';
}

const UIButton = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: UIButtonProps) => {
  const variantClasses = {
    primary:
      'mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
    link: 'text-blue-500 underline hover:text-blue-600',

    landing:
      'px-6 py-4 text-lg text-white font-main border-[2px] border-transparent bg-transparent transition duration-300 ' +
      '[border-image:linear-gradient(to_right,_#ec4899,_#f97316)_1] ' +
      'shadow hover:shadow-[0_0_15px_3px_rgba(236,72,153,0.6)]',
    transparent:
      'px-4 py-4 text-lg text-white font-main border-[2px] border-transparent bg-transparent transition duration-300 ' +
      'shadow hover:shadow-[0_0_15px_3px_rgba(236,72,153,0.6)]',
  };

  return (
    <button className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default UIButton;
