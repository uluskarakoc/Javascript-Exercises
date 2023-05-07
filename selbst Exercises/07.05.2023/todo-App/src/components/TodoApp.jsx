import Header from "./Header";
import Info from "./Info";
import TodosLogic from "./TodosLogic";

const TodoApp = () => {
  return (
    <>
      <Header deneme="ögrenmeye calisiyorum" />
      <TodosLogic />
      <Info />
    </>
  );
};

export default TodoApp;
