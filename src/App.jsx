import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
      <TreeView menus={menus} />
      </div>
    </>
  );
}

export default App;
