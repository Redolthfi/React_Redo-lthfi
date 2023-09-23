
const SelectInput = () => {


  return (
    <div className="mb-4">
      <label htmlFor="selectInput" className="block text-gray-600 font-medium">
        Pilih salah satu:
      </label>
      <select
        id="selectInput"
        className="border  rounded-md p-2 w-full max-w-xs"
      >
        <option value="">Pilih</option>
        <option value="option1">Opsi 1</option>
        <option value="option2">Opsi 2</option>
        <option value="option3">Opsi 3</option>
      </select>
    </div>
  );
}

export default SelectInput;