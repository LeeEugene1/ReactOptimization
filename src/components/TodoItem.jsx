import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// //onUpdate, onDelete(객체함수는 주소값이 계속 다르게 저장되기때문에 얕은비교시 계속다름)
// //때문에 계속 리렌더링되서 memo를 하려면 prev, next비교가 필요함
// export default memo(TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//   //T -> props가 바뀌지않았다 -> 리렌더링 x
//   //F -> props가 바뀌었다 -> 리렌더링
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(TodoItem);
