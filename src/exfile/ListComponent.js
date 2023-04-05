import React, { useState, useRef } from "react";

const ListComponent = () => {
  /* userState사용전 초기화 */
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);
  const [nextId, setNextId] = useState(0);
  const inputName = useRef(null);

  /* 이벤트들 */

  /* input값에 문자 입력할 때 마다 실행 되는 이벤트 함수*/
  const onChange = (e) => {
    setInput(e.target.value);
  };

  /* enter or 확인 버튼 클릭 시 발생하는 이벤트 함수*/
  const submit = (e) => {
    e.preventDefault(); //새로고침 방지
    const about_lists = lists.concat({
      //원래 있는 리스트에 붙여주기
      id: nextId,
      text: input,
    });
    setNextId(nextId + 1); //id값 +1

    /*방금 붙여준 리스트까지 포함 된 리스트로 세팅하기*/
    setLists(about_lists);
    setInput(""); //input 태그안에 있는 문자 지워주기
  };

  /* 리스트들 화면에 띄우기 위해 map으로 반복 요소 불러오기 */
  const input_list = lists.map((list) => (
    <li
      /*고유 key값 주기*/
      key={list.id}
      /*더블클릭시 삭제할 이벤트*/
      onDoubleClick={() => removeList(list.id)}
      /*클릭시 요소가 수정되는 이벤트*/
      onClick={() => modify(list.id)}
    >
      {list.text}
    </li>
  ));

  //삭제 이벤트 함수
  const removeList = (id) => {
    const about_lists = lists.filter((list) => list.id !== id);
    setLists(about_lists);
  };

  //수정 이벤트 함수
  const modify = (id) => {
    lists.map((list) => {
      if (list.id === id) {
        inputName.current.focus();
        list.text = inputName.current.value;
      }
    });
    setLists(lists);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="list"
          type="text"
          placeholder="추가할 문장을 써주세요."
          value={input}
          onChange={onChange}
          ref={inputName}
        />
        <button type="submit">확인</button>
      </form>
      <hr />
      <ul>{input_list}</ul>
    </div>
  );
};

export default ListComponent;
