import Filter from "../components/Filter/Filter";
import Pagination from "../components/Pagination/Pagination";
import ItemList from "../components/Products/ItemList";
import SearchBar from "../components/SearchBar/SearchBar";
import { Tabs } from "antd";

const items = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

const onChange = (key: string) => {
  console.log(key);
};

const HomePage = () => {
  return (
    // <>
    //   <div className="d-flex justify-content-between align-items-baseline ">
    //     <SearchBar />
    //     <Filter />
    //   </div>
    //   <ItemList />
    //   <Pagination />
    // </>
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}></Tabs>
    </div>
  );
};

export default HomePage;
