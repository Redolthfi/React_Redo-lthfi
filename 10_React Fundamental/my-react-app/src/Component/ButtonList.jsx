const ButtonList = () => {
    return (  
<div className=" rounded-md shadow-sm" role="group">
  <button type="button" className="px-4 py-2 text-sm font-medium text-white  border bg-blue-600 border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  ">
    Deletion
  </button>
  <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  ">
    Search
  </button>
</div>

    )
}

export default ButtonList;