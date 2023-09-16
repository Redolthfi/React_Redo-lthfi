const FileInput = () => {
    return (
      <div className="mb-4">
        <label htmlFor="fileInput" className="block text-gray-600 font-medium">
          Pilih File:
        </label>
        <input
          type="file"
          id="fileInput"
          className="border  rounded-md p-2 w-full max-w-xs "
        />
      </div>
    );
  }
  
  export default FileInput;
  
  
  
  
  
  