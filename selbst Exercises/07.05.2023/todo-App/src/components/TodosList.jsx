// Mit der nachfolgenden Zeile schalten wir
// eine eslint regel ab

const TodosList = (props) => {
  // Alternative zu map
  // forEach ist ein statement, keine Expression
  // => deswegen können wir es nicht innerhalb von jsx verwenden
  // const todoOutputArray = [];
  // props.todosProps.forEach( todo => {
  //   todoOutputArray.push(<li>{todo.title}</li>)
  // })
  return (
    <ul>
      {props.todosProps.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
      <br />
      {props.mainText}

      {/*
    <p>Alternative zu map (siehe oben "forEach") </p> 
    {todoOutputArray} 
    */}
    </ul>
  );
};

export default TodosList;
