const ReusableButton = ({
  text,
  link,
  background,
  className = "",
  style = {},
  textColor = "transparent",
  skew = true,
}) => {
  const buttonStyles = {
    background: background || "linear-gradient(to right, #D903B3, #62C6FF)", 
    fontFamily: "Lato, sans-serif",
    transform: skew ? "skew(-20deg)" : "none",
    ...style,
  };

  const textStyles = {
    transform: skew ? "skew(20deg)" : "none",
    color: textColor, 
  };

  return (
    <button
      className={`relative inline-block font-medium px-8 py-4 rounded-xl text-[9px] md:text-sm drop-shadow-md ${className}`}
      style={buttonStyles}
    >
      <a href={link || "#"} className="block w-full h-full">
        <span
          style={textStyles}
          className={`font-extrabold ${
            textColor === "transparent"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#D903B3] to-[#62C6FF]"
              : ""
          }`} 
        >
          {text}
        </span>
      </a>
    </button>
  );
};

export default ReusableButton;
