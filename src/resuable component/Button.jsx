
function Button({className,buttonText,...props}) {
    console.log(props);
    
  return (
    <button className={className} {...props}>{buttonText}</button>
  )
}

export default Button