
function Input({ className, name, id, type, handleChange, ...props }) {
    return (
        <>
            <input type={type === "password" ? "password" : "text"} className={className} name={name} {...props} onChange={handleChange} />
        </>
    )
}

export default Input