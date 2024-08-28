import "./List.css";
import TodoItem from "./TodoItem";
import { useEffect, useMemo, useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const getAnalizedData = () => {
    console.log("getAnalizedData 호출");
    const totalCnt = todos.length;
    const doneCnt = todos.filter((t) => t.isDone).length;
    const notDoneCnt = totalCnt - doneCnt;

    return {
      totalCnt,
      doneCnt,
      notDoneCnt,
    };
  };

  // const { totalCnt, doneCnt, notDoneCnt } = getAnalizedData(); //검색어를 입력 할때마다 리랜더링이 일어나 호출
  const { totalCnt, doneCnt, notDoneCnt } = useMemo(getAnalizedData, [todos]); //렌더링초기 딱1번만 호출, todos state가 변할때만 호출

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <ul>
        <li>Total: {totalCnt}</li>
        <li>Done: {doneCnt}</li>
        <li>Todo: {notDoneCnt}</li>
      </ul>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
