import "./Editor.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  //날짜 변경
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  //내용 변경
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  //작성 완료 버튼
  const handleSubmit = () => {
    onSubmit(state);
  };

  //취소하기 버튼
  const handleOnGoBack = () => {
    navigate(-1);
  };

  //감정 이미지 선택
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  useEffect(() => {
    if (initData) {
      setState(
        {
          ...initData,
          date: getFormattedDate(new Date(parseInt(initData.date))),
        },
        [initData]
      );
    }
  });

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input
            type="date"
            value={state.date}
            onChange={handleChangeDate}
            max="9999-12-31"
          />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem
              key={it.emotionId}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={state.content}
          placeholder="오늘은 어땠나요?"
        />
      </div>
      <div className="editor_section bottom_section">
        <Button text={"취소하기"} onClick={handleOnGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};
export default Editor;
