import { useRef, useState } from "react";
import UseOnclickOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOnclickOutsideClick(ref, () => setShowContent(false));

  return (
    <div ref={ref}>
      <center>
        <br />
        <br />
        <br />
        {showContent ? (
          <div>
            <h1>This is a random content</h1>
            <p>
              Please click outside of this to close this. It won't close if you
              click indside of this content.
            </p>
          </div>
        ) : (
          <button onClick={() => setShowContent(true)}>Show Content</button>
        )}
      </center>
    </div>
  );
}
