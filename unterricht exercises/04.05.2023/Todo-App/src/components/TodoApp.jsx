import Header from "./Header"
import TodosLogic from "./TodosLogic";

const TodoApp = () => {
  return (
    <>
      <Header/>
      <TodosLogic/>
      <br />
      <h2>Component Übersicht</h2>
    <img 
      style={{maxWidth: "500px"}}
      src={uebersichtImg} alt="Übersicht" 
    />
    </>
  );
};

export default TodoApp;





