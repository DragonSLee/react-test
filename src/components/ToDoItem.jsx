/* 리액트 업데이트 참고 블로그  feat.es6 스프레드 연산자
 https://velog.io/@hyundong_kk/React-%EB%B6%88%EB%B3%80%EC%84%B1-feat-...%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C%EC%97%B0%EC%82%B0%EC%9E%90 
 */

import React, { useEffect, useRef, useState } from "react";

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState("");

  const editInputRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const onChangeEditInput = (event) => {
    setNewText(event.target.value); //onChangeInput() 메소드 실행 시 target에 있는 input -> value 값을 가져온다.
  };

  /* todoItem  기존 값을 불러오고 deleted값 변경 후 업데이트 */
  const onRemove = () => {
    // 삭제기능
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      /* todoList 배열의 내용을 item에 새롭게 반환 */
      const nextTodoList = todoList.map((item) => ({
        /* 변수를 업데이트 하기 위해 기존의 배열을 불러오고 ()...item)
      불러온 뒤 삼항연산자를 이용하여 id값을 비교하여 같을 경우 deleted값 true로 변경 */
        ...item, //es6 spread 연산자 ...
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));
      setTodoList(nextTodoList); //변경된 배열을 업데이트
    }
  };

  // 체크 시 취소선 CSS 변경
  const onClickCheck = () => {
    // 체크박스 기능
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };

  /* 수정 버튼 */
  const onEdit = () => {
    setEdited(true);
  };

  const nextSubmit = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? newText : item.text,
    }));
    setTodoList(nextTodoList);
    setEdited(false);
  };

  return (
    <li className="todoapp_item">
      {/* 체크 박스 */}
      <input
        type="checkbox"
        className="todoapp_item_checkbox"
        checked={todoItem.checked}
        onChange={onClickCheck}
      />

      {/* 할 일 내용 */}
      {edited ? (
        <input
          className="aa"
          type="text"
          value={newText}
          ref={editInputRef}
          onChange={onChangeEditInput}
        />
      ) : (
        <span
          className={`todoapp_item_ctx ${
            todoItem.checked ? "todoapp_item-ctx-checked" : ""
          }`}
        >
          {todoItem.text}
        </span>
      )}

      {/* 수정 버튼 */}
      {edited ? (
        <button
          type="button"
          className="todoapp_item_edit_btn"
          onClick={nextSubmit}
        >
          <span>submit</span>
        </button>
      ) : (
        <button
          type="button"
          className="todoapp_item_edit_btn"
          onClick={onEdit}
        >
          <span>Edit</span>
        </button>
      )}
      {/* 삭제 버튼 */}
      <button
        type="button"
        className="todoapp_item_delete_btn"
        onClick={onRemove}
      >
        <span>Delete</span>
      </button>
    </li>
  );
};

export default ToDoItem;
