import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-lg py-6 px-6 ml-12 md:ml-28 mb-8 mr-4 md:mr-8">
      <Image
        src="/logos/mycompany-footer.png"
        alt="Logo"
        width={290}
        height={113}
        className="mx-auto mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <div className="flex mb-2">
            <Image
              src="/icons/smartphone-footer.png"
              alt="Phone"
              width={24}
              height={24}
            />
            <p className="flex items-center ml-2 text-sm font-semibold text-gray-400">
              Contact nums
            </p>
          </div>
          <a href="tel:+91 0000000000">+91 0000000000</a>
        </div>
        <div>
          <div className="flex mb-2 mt-4 md:mt-0">
            <Image
              src="/icons/mail-footer.png"
              alt="Mail"
              width={24}
              height={24}
            />
            <p className="flex items-center ml-2 text-sm font-semibold text-gray-400">
              Email
            </p>
          </div>
          <a href="mailto:demo@gmail.com">demo@gmail.com</a>
        </div>
        <div>
          <div className="flex mb-2 mt-4 md:mt-6 lg:mt-0">
            <Image
              src="/icons/place-footer.png"
              alt="Address"
              width={24}
              height={24}
            />
            <p className="flex items-center ml-2 text-sm font-semibold text-gray-400">
              Location
            </p>
          </div>
          <a
            href="https://www.google.com/maps/place/Mumbai,+Maharashtra/@18.9667,72.8259,11z"
            target="_blank"
          >
            Mumbai, India
          </a>
        </div>
        <div>
          <div className="flex mb-2 mt-4 md:mt-6 lg:mt-0">
            <Image
              src="/icons/request-footer.png"
              alt="Request"
              width={24}
              height={24}
            />
            <p className="flex items-center ml-2 text-sm font-semibold text-gray-400">
              Leave a request
            </p>
          </div>
          <a href="javascript:void(0)" target="_blank">
            Leave a request
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-300 mt-8">
        We work throughout the world
      </p>
    </footer>
  );
};

export default Footer;
