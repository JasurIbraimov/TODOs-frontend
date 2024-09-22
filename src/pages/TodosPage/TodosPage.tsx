import Page from "../../components/Page/Page";
import gridLayoutIcon from "../../assets/icons/grid.svg";
import listLayoutIcon from "../../assets/icons/list.svg";
import plusIcon from "../../assets/icons/plus.svg";

import "./TodosPage.css";
import { useState } from "react";
import Todo from "../../components/Todo/Todo";

const TodosPage = () => {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const header = (
    <>
      <h1>TODO App</h1>
      <div>
        <button
          onClick={() => setLayout("grid")}
          className={
            "main-btn layout-btn " + (layout === "grid" ? "active" : "")
          }
        >
          <img src={gridLayoutIcon} alt="Grid Layout" />
        </button>
        <button
          onClick={() => setLayout("list")}
          className={
            "main-btn layout-btn " + (layout === "list" ? "active" : "")
          }
        >
          <img src={listLayoutIcon} alt="List Layout" />
        </button>
      </div>
    </>
  );
  return (
    <Page header={header}>
      <div className={"todos " + layout}>
        <div
          className="todo create"
          onClick={() => alert("Todo Item create")}
        >
          <button className="main-btn create-btn">
            <img src={plusIcon} alt="Create Todo" />
          </button>
          <p>Create new Todo</p>
        </div>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
    </Page>
  );
};

export default TodosPage;
