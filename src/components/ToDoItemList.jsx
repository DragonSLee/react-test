import React from "react";
import ToDoItem from "./ToDoItem";

/* 부모로 부터 props */
const ToDoItemList = ({ title, todoList, setTodoList, checkedList }) => (
  <div className="todoapp_list">
    {/* props로 부터 title 값을 전달 받음 */}
    <p className="todoapp_list_tit">{title}</p>
    <ul className="todoapp_list_ul">
      {todoList && // todoList가 있을때만 출력
        /* key와 todoItem을 같이 props로 <ToDoItem /> 컴포넌트로 넘겨준다. */
        todoList.map((todoItem) => {
          // checkedList 값에 따라 '할 일 목록' 출력
          //if (checkedList !== todoItem.checked) return null;

          //삭제한 항목인 경우, 출력하지 않음 (deleted가 true)
          if (todoItem.deleted) return null;
          // map을 이용하여 ToDoItem을 출력
          return (
            <ToDoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);

export default ToDoItemList;
