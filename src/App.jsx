
import QRCodeGenerator from "./components/07-qr-code-generator";
import Accordian from "./components/01-accordian";
import ImageSlider from "./components/04-image-slider";
import LoadMoreData from "./components/05-load-more-data";
import RandomColor from "./components/02-random-color";
import StarRating from "./components/03-star-rating";
import TreeView from "./components/06-tree-view";
import menus from "./components/06-tree-view/data";
import LightDarkMode from "./components/08-lght-dark-mode.jsx";

function App() {
  return (
    <>
    <div>
      {/* Accordian Component */}
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star-Rating Component */}
      {/* <StarRating/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}


      {/* Load More Data Component */}
      {/* <LoadMoreData/> */}


      {/* Tree view component | menu UI component | recursive navigation menu  */}
      {/* <TreeView menus={menus} /> */}


      {/* QR Code Generator */}
      {/* <QRCodeGenerator/> */}


      {/* Light and Dark theme switch with local storage */}
      <LightDarkMode/>
      </div>
    </>
  );
}

export default App;
