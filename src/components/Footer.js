const Footer = () => (
  // <div className="relative top-96 bg-black h-16 text-white  flex justify-center items-center">
  //  <h1 className="font-bold text-base italic">Created_by@AP</h1>
  // </div>

  <footer className="p-2 bg-black fixed bottom-0 flex items-center justify-center shadow md:flex md:items-center md:justify-center md:p-3 dark:bg-gray-800 w-full">
    <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="#" className="hover:underline">
        AP
      </a>
      .All Rights Reserved.
    </span>
    {/* <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul> */}
  </footer>
);

export default Footer;
