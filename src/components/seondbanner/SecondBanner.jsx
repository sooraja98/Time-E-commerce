
const SecondBanner = () => {
  return (
    <div className="flex justify-center flex-row max-w-full mt-10 rounded-sm">
      <div className="flex flex-col bg-neutral-950 w-full p-4 md:p-12">
        <div className="md:flex justify-center md:text-4xl text-sm">
          <h1 className="text-2xl md:text-4xl text-center text-white font-chronicle-deck-cond serif">
            WatchBox is home to the greatest collection of pre-owned luxury watches,
            all certified as authentic and Collector Quality.
          </h1>
        </div>
        <div className="flex justify-center mt-4">
          <img
            src="https://watchbox-sfcc.imgix.net/wbseal/SVG/WB-Seal-RGB-2Sept21-06.svg?w=150&auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5"
            alt="WatchBox Seal"
            className="h-16 md:h-28 w-auto"
          />
        </div>
        <div className="md:flex md:flex-row flex-col justify-center mt-4">
          <p className="text-white text-center text-lg font-semibold">360° QUALITY INSPECTION</p>
          <p className="text-white text-center text-lg font-semibold mx-4">|</p>
          <p className="text-white text-center text-lg font-semibold">EXPERT INTERIOR SERVICE</p>
          <p className="text-white text-center text-lg font-semibold mx-4">|</p>
          <p className="text-white text-center text-lg font-semibold">AUTHENTICITY GUARANTEE</p>
          <p className="text-white text-center text-lg font-semibold mx-4">|</p>
          <p className="text-white text-center text-lg font-semibold">WORRY-FREE WEAR</p>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
