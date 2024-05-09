type ButtonType = {
    children : any
    type? : "submit" | "button" | "reset",
    bgColor? : string,
    textColor? :string,
    className? :string,
    onClick? : (e : React.MouseEvent<HTMLButtonElement>) => void,
  }
  
  const Button = ({
    children,
    type,
    textColor = "text-white",
    bgColor = "bg-black",
    className = "",
    onClick } : ButtonType) => {
   return (
    <button
    type={type || "button"}
    className={`rounded-full font-light w-full whitespace-nowrap ${bgColor} ${textColor} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
   )
  };
  
  export default Button;
  