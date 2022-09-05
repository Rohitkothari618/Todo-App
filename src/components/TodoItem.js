import React, { useRef } from "react";
import { BsCheck } from "react-icons/bs";

const TodoItem = ({ tasks, settask, task }) => {
    const checkboxRef=useRef();

    const onChangehandler = () => {
        const tasksCopy = [...tasks];
        tasksCopy = tasksCopy.map((t) => {
          if (t.id === task.id) {
            return { ...t, isCompleted: checkboxRef.current.checked };
          } else {
            return t;
          }
        });
        settask(tasksCopy);
      };

  return (
    <div className="flex items-center p-4 my-6 space-x-4 rounded-3xl bg-[#21212B]">
      <div className="relative">
        <input
          type="checkbox"
          name={task.name}
          id={task.id}
          className="opacity-0 absolute w-6 h-6 "
          ref={checkboxRef}
          defaultChecked={task.isCompleted}
          onChange={onChangehandler}
          
        />
        <div className="flex items-center justify-center w-6 h-6 bg-transparent border-2 border-pink-500 rounded-lg ">
          <BsCheck className="hidden w-6 h-6 rounded-lg border " />
        </div>
      </div>

      <label
        htmlFor={task.id}
        className={`text-lg font-light select-none
       ${task.isCompleted ? "line-through" : " "} `}
      >
        {task.name}
      </label>
    </div>
  );
};

export default TodoItem;
