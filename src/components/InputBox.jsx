import React, { useEffect, useRef, useState } from "react";

const InputBox = ({ todoList, setTodoList }) => {
  // 부모 컴포넌트로 부터 props로 todoList, setTodoList를 받아온다.
  /* useState() Hook으로 빈 문자열의 text와 setText()를 생성 */
  const [text, setText] = useState("");

  //useEffect는 리액트에세 컴포넌트가 렌더링 이후에 어떤 일을 수행해야 하는지 알려준다.
  useEffect(() => {
    // todoList가 변했을때만 실행
    console.log(todoList);
  }, [todoList]);

  /* Ref는 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법 제공 */
  const inputRef = useRef(null); // useRef() Hook으로 ref 생성

  const onChangeInput = (event) => {
    setText(event.target.value); //onChangeInput() 메소드 실행 시 target에 있는 input -> value 값을 가져온다.
  };

  const onClickAddButton = () => {
    // setTdoList()를 이용하여 todoList에 추가
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      deleted: false,
    }); // concat함수는 배열에 추가하여 새로운 배열을 반환한다.
    setTodoList(nextTodoList);

    setText(""); // 빈 문자열로 초기화
    inputRef.current.focus(); // 클릭 시 input태그로 포커싱
  };

  return (
    <div>
      <div className="todoapp_inputbox">
        {/* 오늘 할 일 입력 */}
        <input
          type="text"
          name="todoItem"
          ref={inputRef}
          value={text}
          placeholder="오늘 할 일을 입력"
          className="todoapp_inputbox_inp"
          onChange={onChangeInput} // input에 데이터 입력으로 변화가 발생 시 onChangeInput() 메소드 실행
        />

        {/* 추가 버튼 */}
        <button
          type="submit"
          className="todoapp_inputbox_add_btn"
          onClick={onClickAddButton} // 추가 버튼 클릭 시 onClickAddButton() 메소드 실행
        >
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
};

export default InputBox;
