import "./DiaryList.css";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 정렬
const sortOptList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const DiaryList = ({ data }) => {
  const navigate = useNavigate();
  // 정렬
  const [sortType, setSortType] = useState("latest");
  // 정렬 결과 저장
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  // 작성 페이지 이동
  const onClickNew = () => {
    navigate("/new");
  };

  // 정렬 이벤트 핸들러
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={onClickNew}
          />
        </div>
      </div>
    </div>
  );
};
export default DiaryList;
