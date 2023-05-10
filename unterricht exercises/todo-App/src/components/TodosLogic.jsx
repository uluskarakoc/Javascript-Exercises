import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { useState } from 'react'


const TodosLogic = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false
    }
  ])


  // hier speichern wir die Daten, deshalb hier die CRUD (Create Read Update  Delete) Operationen (löschen von todos)
  const deleteTodo = (id) => {
    // Array überschreiben
    setTodos([...todos.filter((todo) => {
      // alle die nicht geklickt wurden werden im Array bleiben
      return todo.id !== id
    })
    ])

    // 2. Möglichkeit ein Todo zu löschen
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodos)

  }

  return (
    <div>
      <InputTodo />
      <TodosList
        todosProps={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        mainText="Hi"
      />
    </div>
  )

}

export default TodosLogic;


// KEY Erklärung
/*
- "Keys" sind spezielle Attribute, die React helfen, Elemente in einer Liste zu identifizieren.
- Sie sind wichtig, wenn du mit dynamischen Listen arbeitest, 
  also wenn du mehrere Elemente auf einmal renderst.
- Ohne Keys kann React durcheinander kommen, welche Elemente hinzugefügt, geändert oder entfernt wurden. 
- Keys sollten einzigartig sein, damit React die Elemente richtig identifizieren kann.
- Man benutzt meistens die IDs von Datenobjekten als Keys.
- Keys werden direkt auf die Elemente gesetzt, 
  die in einer Liste gerendert werden, z.B. beim Mappen von Arrays.
*/