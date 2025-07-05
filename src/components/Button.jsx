const Button = ({ name, btnType, isBeam = false, containerClass }) => {
  return (
    <button
      className={
        btnType == "cv"
          ? `hire-me-btn ${containerClass}`
          : `contact-btn ${containerClass}`
      }
    >
      {isBeam && (
        <span className="relative-flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      <span className="ml-3 text-white-800 font-semibold">{name}</span>
    </button>
  );
};

export default Button;
