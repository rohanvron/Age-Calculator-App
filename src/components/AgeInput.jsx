const AgeInput = ({ name, label, placeholder, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <label htmlFor={name}>{label}</label>
      <input 
      type="text" 
      name={name} 
      id={name} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}>
      </input>
      
      {/* For displaying an error */}
      {error && 
        <span className="text-[14px] italic font-normal text-light-red">
            {error}
        </span>}
    </div>
  );
};

export default AgeInput;
