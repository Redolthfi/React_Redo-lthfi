const Navbar = () => {

    return (
        <>
            <nav className="p-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-600 text-2xl font-bold">Simple Header</a>
                        <div>
                            <a href="#" className="text-white mr-4 font-bold border bg-blue-600 px-3 py-2 rounded-lg">Home</a>
                            <a href="#" className="text-blue-600 mr-4 font-bold">Features</a>
                            <a href="#" className="text-blue-600 mr-4 font-bold">Pricing</a>
                            <a href="#" className="text-blue-600 mr-4 font-bold">FAQs</a>
                            <a href="#" className="text-blue-600 font-bold">About</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;  