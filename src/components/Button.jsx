const Button = ({ name, btnType, isBeam = false, containerClass }) => {
    return (
      <button className={btnType == "contactme" ? `contact-btn ${containerClass}` : `hire-me-btn ${containerClass}`}>
          {isBeam && (
            <span className='relative-flex h-3 w-3'>
              <span className="btn-ping"/>
              <span className="btn-ping_dot"/>
            </span>
          )}
          {name}
      </button>
    )
};

export default Button;


