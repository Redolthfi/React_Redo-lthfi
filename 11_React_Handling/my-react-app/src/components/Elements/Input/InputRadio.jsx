import React, { useState } from 'react';

function RadioInput() {


  return (
    <div className="mb-4">
      <p className="block text-gray-600 font-medium">Pilih salah satu:</p>
      <div className="mt-2 flex flex-col">
        <p className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500 h-5 w-5"
            name="option"
            value="option1"

          />
          <span className="ml-2">Brand New</span>
        </p>
        <p className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500 h-5 w-5"
            name="option"
            value="option2"
      
          />
          <span className="ml-2">Second Hank</span>
        </p>
        <p className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500 h-5 w-5"
            name="option"
            value="option3"

          />
          <span className="ml-2">Refurbished</span>
        </p>
      </div>


    </div>
  );
}

export default RadioInput;