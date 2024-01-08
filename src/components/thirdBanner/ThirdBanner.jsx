const ThirdBanner = () => {

    return (
        <div className="md:w-full bg-black flex md:flex md:flex-row flex-col md:justify-between text-white mt-10 text-2xl">
            <div className="md:pt-20 md:ml-14 pt-10">
                <p className="font-bold text-sm uppercase">Services</p>
                <p className="text-3xl font-bold">Multimedia products</p>
                <p className="text-2xl mb-10 leading-none">Attractive designs for your brand</p>
                <a href="#" className="bg-yellow-500 py-2 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                    Contact us
                </a>

            </div>
            <div className="md:mt-10 mt-6">
                <img src="https://img.mensxp.com/media/content/2014/Jan/shutterstock_1388940996.jpg" alt="A descriptive alt text for your image" className="mb-4 md:object-fill md:h-80"/>

            </div>

        </div>
    )
}

export default ThirdBanner;
