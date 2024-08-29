import { memo } from "react";
import "./Header.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    console.log("해더컴포넌트가 출력됨");
  });
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header); //header컴포넌트가 불필요하게 렌더링되지않음
