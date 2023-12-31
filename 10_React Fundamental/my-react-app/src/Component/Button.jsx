const Button = (props) => {
const {children} = props
    return (
        <div className="flex justify-center px-10 mt-40">
            <button className="bg-blue-600  text-white font-semibold py-2 px-4 rounded w-full">{children}</button>
        </div>
    )
}

export default Button;