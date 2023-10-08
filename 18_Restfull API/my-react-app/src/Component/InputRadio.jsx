
const RadioInput = (props) => {

  const {onChange,  name} = props


  return (
    <div className="mb-4">
      <p className="block text-gray-600 font-medium">Product Freshness</p>
      <div className="mt-2 flex flex-col">
        <p className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500 h-5 w-5"
            name={name}
            value="Brand New"
            onChange={onChange}

          />
          <span className="ml-2">Brand New</span>
        </p>
        <p className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500 h-5 w-5"
            name={name}
            value="Second Hank"
            onChange={onChange}
          />
          <span className="ml-2">Second Hank</span>
        </p>
        <p className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500 h-5 w-5"
            name={name}
            value="Refurbished"
            onChange={onChange}
          />
          <span className="ml-2">Refurbished</span>
        </p>
      </div>


    </div>
  );
}

export default RadioInput;