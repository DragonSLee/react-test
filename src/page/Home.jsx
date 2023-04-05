import React, { useState } from "react";
import InputBox from "../components/InputBox";
import ToDoItemList from "../components/ToDoItemList";
import HeaderContent from "../components/HeaderContent";
import Clock from "../components/Clock";

const Home = () => {
  /* 아이템을 담을 리스트와 setter함수를 생성 */
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage_container">
      <Clock />
      <HeaderContent />
      {/* Todo Item을 추가할 수 있는 input 박스 */}
      {/* inputBox 컴포넌트로 todoList와 setTodoList()를 념겨준다. */}
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      {/* 할 일 Item 리스트 */}
      {/* 목록에 props으로 전달 */}
      <ToDoItemList
        title={"할 일"}
        todoList={todoList}
        setTodoList={setTodoList}
        //checkedList={false}
        //checkedList={true}
      />
    </div>
  );
};

export default Home;
