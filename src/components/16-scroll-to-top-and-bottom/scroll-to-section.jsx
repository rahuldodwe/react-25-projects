import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "sixth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <center>
      <h1 className="m-t">16. Scroll To a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((item, index) => (
        <div ref={index === 5 ? ref : null} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </center>
  );
}
