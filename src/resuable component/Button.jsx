
function Button({className,buttonText,handleClick,...props}) {
    console.log(props);
    
  return (
    <button className={className} onClick={handleClick} {...props}>{buttonText}</button>
  )
}

export default Button