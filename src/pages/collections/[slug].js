import { IoChevronBack } from "react-icons/io5";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import Layout from "../../components/Layout";
import mockData from "../../../mockData.json";
import { useMemo, useState } from "react";
import TodoItem from "../../components/TodoItem";

export async function getServerSideProps({ query }) {
  return {
    props: {
      collection: query.slug,
    },
  };
}

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const [newTask, setNewTask] = useState("");
  const [tasks, settask] = useState(mockData.tasks);
  console.log(newTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;

    settask((prevTask) => [
      ...prevTask,
      {
        name: newTask,
        id: Math.floor(Math.random() * 100000),
        isCompleted: false,
        description: newTask,
      },
    ]);
  };

  const todoTask = useMemo(() => {
    return tasks.filter((task) => !task.isCompleted);
  }, [tasks]);
  const completedTask = useMemo(() => {
    return tasks.filter((task) => task.isCompleted);
  }, [tasks]);

  return (
    <Layout>
      <div className="flex flex-col space-y-8 w-full max-w-xl overflow-y-auto max-h-[70%] m-10 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-5 ">
            <div className="rounded-xl bg-gray-200/20 p-2 ">
              <IoChevronBack className="w-4 h-4" />
            </div>
            <h3 className="font-medium text-2xl capitalize">{collection}</h3>
          </div>

          <div className="flex items-center justify-center">
            <BsThreeDots className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-center select-none px-4 py-2 space-x-4 transition transform  border border-gray-700 rounded-2xl group ">
          <div
            className="p-1 transition transform bg-pink-500 rounded cursor-pointer active:scale-90 hover:scale-105 "
            onClick={handleSubmit}
          >
            <BsPlus className="w-5 h-5 " />
          </div>
          <form onSubmit={handleSubmit} className="w-full ">
            <input
              type="text"
              name="todo"
              id="todo"
              className="w-full outline-none bg-transparent placeholder:text-gray-400 "
              placeholder="Add a Task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </form>
        </div>

        <div>
          <div>
            <h3>Task-{todoTask.length}</h3>
            <div>
              {todoTask.map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  tasks={tasks}
                  settask={settask}
                />
              ))}
            </div>
          </div>
          <div>
            <h3>Completed TASK-{completedTask.length}</h3>
            <div>
              {completedTask.map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  tasks={tasks}
                  settask={settask}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionPage;
