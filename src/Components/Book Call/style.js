const styles = {
  label: "font-medium text-[1.1rem]",
  input:
    "border border-[rgb(181,181,181)] border-t-0 border-r-0 border-l-0 pb-3 outline-none text-[rgb(36,36,36)] text-[1.1rem] focus:border-b-[rgb(70,134,255)]",
  error: "text-red-500 text-sm",

  submitBase:
    "mt-2 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300",

  submitActive:
    "bg-[rgb(70,134,255)] hover:bg-[rgb(60,120,240)] cursor-pointer",

  submitDisabled:
    "bg-[rgb(146,193,255)] cursor-not-allowed",

  contactLink:
    "flex gap-3 items-center text-white transition-colors duration-300 hover:text-gray-300",
};

export default styles;