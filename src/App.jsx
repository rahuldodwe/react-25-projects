import QRCodeGenerator from "./components/07-qr-code-generator";
import Accordian from "./components/01-accordian";
import ImageSlider from "./components/04-image-slider";
import LoadMoreData from "./components/05-load-more-data";
import RandomColor from "./components/02-random-color";
import StarRating from "./components/03-star-rating";
import TreeView from "./components/06-tree-view";
import menus from "./components/06-tree-view/data";
import LightDarkMode from "./components/08-light-dark-mode.jsx/index.jsx";
import ScrollIndocator from "./components/09-scroll-indicator/index.jsx";
import TabTest from "./components/10-custom-tabs/tab-test.jsx";
import ModalTest from "./components/11-custom-modal-popup/modal-test.jsx";
import GithubProfileFinder from "./components/12-github-profile-finder/index.jsx";
import SearchAutoComplete from "./components/13-search-autocomplete-with-api/index.jsx";
import TicTacToe from "./components/14-tic-tact-toe/index.jsx";
import UseFetchHookTest from "./components/15-custom-hooks/use-fetch/test.jsx";
import UseOnclickOutsideTest from "./components/15-custom-hooks/use-outside-click/test.jsx";
import UseWindowResizeTest from "./components/15-custom-hooks/use-window-resize/test.jsx";
import ScrollToTopAndBottom from "./components/16-scroll-to-top-and-bottom/index.jsx";
import ScrollToSection from "./components/16-scroll-to-top-and-bottom/scroll-to-section.jsx";
import PaginationTest from "./components/17-pagination/test.jsx";
import "./App.css";
import DigitalClock from "./components/18-digital-clock/index.jsx";
import CountdownTimerTest from "./components/19-count-down-timer/test.jsx";
import StepProgressBarTest from "./components/20-step-progress-bar/test.jsx";
import RandomQuoteGenerator from "./components/21-Random-Qoute-Generator/index.jsx";
import TooltipTest from "./components/22-tool-tip/tooltiptest.jsx";
import CurrencyConverter from "./components/23-currecy-converter/index.jsx";

function App() {
  return (
    <>
      <div className="App">
        {/*01. Accordian Component */}
        <Accordian />

        {/*02. Random color component */}
        <RandomColor />

        {/* Star-Rating Component */}
        <StarRating />

        {/*04. Image Slider Component */}
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />

        {/*05. Load More Data Component */}
        <LoadMoreData />

        {/*06.  Tree view component | menu UI component | recursive navigation menu  */}
        <TreeView menus={menus} />

        {/*07. QR Code Generator */}
        <QRCodeGenerator />

        {/*08. Light and Dark theme switch with local storage */}
        <LightDarkMode />

        {/*09. Scroll indicator Component */}
        {/* <ScrollIndocator url={'https://dummyjson.com/products?limit=100'}/> */}

        {/*10 Custom tabs component */}
        <TabTest />

        {/*11. Custom Popup Component */}
        <ModalTest />

        {/*12. Github profile finder */}
        <GithubProfileFinder />

        {/*13. Search Auto Complete */}
        <SearchAutoComplete />

        {/*14. Tic Tac Toe */}
        <TicTacToe />

        {/*-15.------------ UseFetch Custom Hook ---------------*/}
        {/* <UseFetchHookTest/> */}
        {/* <UseOnclickOutsideTest/> */}
        {/* <UseWindowResizeTest/> */}

        {/* 16.------------Scroll To Top and Bottom-------------- */}
        {/* <ScrollToTopAndBottom/> */}
        {/* -----------Scroll To Section------------ */}
        <ScrollToSection />

        {/* 17---------------------PAGINATION------------- */}
        <PaginationTest />

        {/*18 --------------------Digital-Clock----------------- */}
        <br />
        <br />
        <br />
        <br />
        <DigitalClock />

        {/*19 --------------------Count-Down-Timer----------------- */}
        <br />
        <br />
        <br />
        <br />
        <CountdownTimerTest />

        {/*20 --------------------Step Progres Bar----------------- */}
        <br />
        <br />
        <br />
        <br />
        <StepProgressBarTest />

        {/*21 --------------------Random Quote Generator----------------- */}
        <br />
        <br />
        <br />
        <br />
        <RandomQuoteGenerator />

        {/*22 --------------------Tool- tir----------------- */}
        <br />
        <br />
        <br />
        <br />
        <TooltipTest />

        {/*22 --------------------Currenct-Converter---------------- */}
        <br />
        <br />
        <br />
        <br />
        <CurrencyConverter />
      </div>
    </>
  );
}

export default App;
