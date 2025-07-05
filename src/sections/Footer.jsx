const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {/* Linkedin */}
        <div className="social-icon">
          <a
            // className="flex items-center gap-2 cursor-pointer text-white-600 z-10"
            className="flex items-center"
            href={"https://www.linkedin.com/in/shinysirichandra99/"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="assets/linkedin.png"
              alt="linkedin"
              //   className="w-1/2 h-1/2"
              className="w-6 h-6 invert object-contain"
            />
          </a>
        </div>

        {/* Github */}
        <div className="social-icon">
          <a
            className="flex items-center"
            href={"https://github.com/shinyZu"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="assets/github.svg"
              alt="github"
              //   className="w-1/2 h-1/2"
              className="w-6 h-6 object-contain"
            />
          </a>
        </div>

        {/* whatsapp */}
        <div className="social-icon">
          <a
            className="flex items-center"
            href={"https://wa.link/6xef7x"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="assets/whatsapp.png"
              alt="whatsapp"
              className="w-6 h-6 invert object-contain"
            />
          </a>
        </div>
      </div>

      <p className="flex self-center text-white-500">
        © {new Date().getFullYear()} Shiny Isurandi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
