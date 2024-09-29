import React, { useState } from "react";

const Tooltip = ({ children, content, delay }) => {
  let timeout;
  
  const [isVisible, setIsVisible] = useState(false);

  function handleShowToolTip() {
    timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay || 500);
  };

  function handleHideToolTip() {
    clearTimeout(timeout);
    setIsVisible(false);
  }

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleShowToolTip}
      onMouseLeave={handleHideToolTip}
    >
      {children}
      {isVisible ? <div className="tooltip">{content}</div> : null}
    </div>
  );
};

export default Tooltip;
