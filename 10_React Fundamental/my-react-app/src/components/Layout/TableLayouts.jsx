import InputForm from "../Elements/Input";
const TableLayouts = (props) => {
    const { title } = props;
    return (
        <div className="flex justify-center mx-auto items-center">
            <div className="w-full text-center">
                <h1 className="font-bold text-3xl">{title}</h1>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Image Of Product
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product Freshness
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Additional Description
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    1,001
                                </th>
                                <td class="px-6 py-4">
                                    Lorem
                                </td>
                                <td class="px-6 py-4">
                                    ipsum
                                </td>
                                <td class="px-6 py-4">
                                    dolor
                                </td>
                                <td class="px-6 py-4">
                                    Brand new
                                </td>
                                <td class="px-6 py-4">
                                    adipiscing
                                </td>
                                <td class="px-6 py-4">
                                    1
                                </td>
                            </tr>
                            <tr class="bg-white border">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    1,002
                                </th>
                                <td class="px-6 py-4">
                                    Lorem
                                </td>
                                <td class="px-6 py-4">
                                    ipsum
                                </td>
                                <td class="px-6 py-4">
                                    dolor
                                </td>
                                <td class="px-6 py-4">
                                    Second Hank
                                </td>
                                <td class="px-6 py-4">
                                    adipiscing
                                </td>
                                <td class="px-6 py-4">
                                    10
                                </td>
                            </tr>
                            <tr class="bg-white ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    1,003
                                </th>
                                <td class="px-6 py-4">
                                    Lorem
                                </td>
                                <td class="px-6 py-4">
                                    ipsum
                                </td>
                                <td class="px-6 py-4">
                                    dolor
                                </td>
                                <td class="px-6 py-4">
                                    Brand new
                                </td>
                                <td class="px-6 py-4">
                                    adipiscing
                                </td>
                                <td class="px-6 py-4">
                                    20
                                </td>
                            </tr>
                            <tr class="bg-white ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    1,004
                                </th>
                                <td class="px-6 py-4">
                                    Lorem
                                </td>
                                <td class="px-6 py-4">
                                    ipsum
                                </td>
                                <td class="px-6 py-4">
                                    dolor
                                </td>
                                <td class="px-6 py-4">
                                    Refurbished
                                </td>
                                <td class="px-6 py-4">
                                    adipiscing
                                </td>
                                <td class="px-6 py-4">
                                    9
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <InputForm placeholder="Search By Product Name"></InputForm>
                </div>
            </div>
        </div>
    )
}

export default TableLayouts;