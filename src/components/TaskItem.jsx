import { memo } from "react";

const TaskItem = ({ val }) => {
  return <li>{val}</li>;
};

export default memo(TaskItem);