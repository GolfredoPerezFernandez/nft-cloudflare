/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
    return (
      <footer className=" text-white py-6">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold">Your Company</h1>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-green-400 hover:underline">Home</a>
            <a href="#" className="text-green-400 hover:underline">About</a>
            <a href="#" className="text-green-400 hover:underline">Services</a>
            <a href="#" className="text-green-400 hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;