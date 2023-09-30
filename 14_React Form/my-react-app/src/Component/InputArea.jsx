const InputArea = () => {
    return (
        <div>          
            <label htmlFor="message" className="block mb-2 text-sm font-medium " style={{color: '#212529'}}>Additional Description</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  focus:ring-blue-500 focus:border-blue-500  mb-4" ></textarea>
        </div>
    )
}

export default InputArea;

