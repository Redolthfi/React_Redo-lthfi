import { Link } from "react-router-dom";
const LandingPages = () => {
    return (
        <div className="min-h-screen justify-center mx-auto items-center flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Ini Landing pages</h1>
            <button className="bg-blue-600  text-white font-semibold py-2 px-4 rounded-lg"><Link to="/CreateProductPages" className="text-white font-bold">Pindah ke halaman Create product</Link></button>
        </div>
    )
}

export default LandingPages;