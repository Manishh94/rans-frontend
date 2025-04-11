import PinedCard from "./propertyCardComponent";
export default function BoardComponent() {
  const imageDetails = [
    {
      src: "/images/Character.png",
      pinnedSrc: "/images/Group16.png",
      heading: (
        <h4 className="text-white mt-2 ">
          Search And Find <br /> Your Property
        </h4>
      ),
      para: <p className="text-white">Users browse the listing</p>,
    },
    {
      src: "./images/Frame.png",
      pinnedSrc: "/images/Group15.png",
      heading: (
        <h4 className="text-white mt-2">
          Schedule a Viewing <br /> or Virtual Tour
        </h4>
      ),
      para: (
        <p className="text-white">Book viewings directly on the platform.</p>
      ),
    },
    {
      src: "./images/image1.png",
      pinnedSrc: "/images/Group17.png",
      heading: (
        <h4 className="text-white mt-2">
          Secure and Manage <br /> Your Transaction
        </h4>
      ),
      para: (
        <p className="text-white">
          Automated payments, <br /> smart contracts, and more.
        </p>
      ),
    },
  ];
  return (
    <>
      <div className="container-fluid Board-container p-5">
        <div className="row mamagment-div">
          <div className="col-12 p-0">
            <div
              className="row p-3"
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              <h3 className="text-white ps-5 mb-5">
                How To Run Solutions Makes Property <br />
                Managment Simple
              </h3>
              {imageDetails.map((obj) => {
                return (
                  <div className="col-md-4 col-sm-12 d-flex flex-column ps-5">
                    <img
                      className="pin mb-3"
                      src={obj["pinnedSrc"]}
                      alt="Pin Icon"
                    />
                    <PinedCard src={obj["src"]} imageStyle="w-100 h-75 mt-5 " />
                    {obj["heading"]}
                    {obj["para"]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
