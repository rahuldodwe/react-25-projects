import "./styles.css";
import MenuList from "./menu-list";

export default function TreeView({ menus }) {
  return (
    <>
      <h1 className="m-t">06. Tree View</h1>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </>
  );
}
