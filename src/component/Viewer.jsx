import "./Viewer.css";
import { emotionList } from "../util";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  console.log(emotionItem);

  return <div className="Viewer"></div>;
};
export default Viewer;
