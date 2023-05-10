// shortcut zum Erstellen functional component = rfec

function TodoItem({ itemProp }) {
  // console.log(itemProp);
  return (
    <li>
      <input type="checkbox" checked={itemProp.completed}
      onchange={()=>console.log("")} />
      {itemProp.title}
    </li>
  );
}

export default TodoItem;
