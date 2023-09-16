const Button = () => {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(Math.floor(Math.random() * 100));
    }

      
    return (
        <div className="flex justify-center px-10 mt-40">
            <button className="bg-blue-600  text-white font-semibold py-2 px-4 rounded w-full " onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Button;