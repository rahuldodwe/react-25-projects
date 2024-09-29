import React from "react";
import Tooltip from ".";
import './tooltip.css';

const TooltipTest = () => {
  return (
    <>
      <h1 className="m-t">22. ToolTip</h1>
      <div>
        <Tooltip delay={1000} content={<p className="con">Tooltip content</p>} children={<p className="hov">Hover Me</p>} />
      </div>
    </>
  );
};

export default TooltipTest;
