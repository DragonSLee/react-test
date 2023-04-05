/* State, Effect HOOK 사용 방법 참고 사이트
https://euzl.github.io/react-hook_2/
*/

import React, { useEffect, useState } from "react";
/* 상단 시계 컴포넌트 */
//HOOK은 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용할 수 있다.
const Clock = () => {
  // time이라는 새로운 state 변수 선언
  const [time, setTime] = useState(new Date()); //State HOOK

  useEffect(() => {
    //setInterval() 함수는 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
    const id = setInterval(() => {
      //1초 마다 반복
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id); //중단
  }, []);

  return (
    <div>
      {/* 함수형 state값 가져오기 */}
      <span className="current-time">{time.toLocaleTimeString()}</span>
    </div>
  );
};

export default Clock;
