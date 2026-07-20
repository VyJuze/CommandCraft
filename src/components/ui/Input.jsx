export const Input = ({
  type = "text",
  value,
  onChange,
  onKeyDown,
  placeholder,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      autoComplete="off"
      spellCheck={false}
      className={`w-full bg-inputs border-2 border-bordedefault focus:border-primarioverde focus:outline-none text-textoprincipal font-monospace text-sm px-4 py-3 transition-colors placeholder:text-textosecundario ${className}`}
    />
  );
};
