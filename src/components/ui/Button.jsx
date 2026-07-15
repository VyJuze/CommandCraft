export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) => {
  const base =
    "w-full py-3 font-display font-bold uppercase tracking-widest text-sm border-2 transition-colors cursor-pointer";

  const variants = {
    primary:
      "bg-primarioverde text-black border-transpartent hover:border-black",
    secondary:
      "bg-fondo text-textoprincipal border-bordedefault hover:border-primarioverde",
    ghost:
      "bg-transparent text-textosecundario border-transparent hover:text-primarioverde",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
