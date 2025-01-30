//import { useState } from "react";
import { useEffect, useState } from "react";
import Form from "./components/Form.tsx";
import TaskComponent from "./components/TaskComponent.tsx";
import { Task } from "./types/index.ts";



function App() {

  const DAYS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
  // Limite de semanas --> 52
  const WEEK_LIMIT = 52;
  const [weekCounter, setWeekCounter] = useState(1);

  // Colección global de tareas.
  const [tasks, setTasks] = useState<Task[]>(
    localStorage.getItem('tasks') == null
      ? []
      : JSON.parse(localStorage.getItem('tasks')!) //El ! para asegurar de que no va a ser null
  );

  // Oyente para actualizar LocalStorage con los cambios de Tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(day: string, week: number, description: string) {
    const newTask: Task = { day, week, description };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  function deleteTask() {

  }

  function renderTasksByDay(day: string) {

    const currentDayTasks = getTasksByDay(day);

    return (
      <>
        <div className="day" key={Math.floor(Math.random() * 2_000_000_000) + 1}>
          <h3>
            {day} ({currentDayTasks.length} tareas)
          </h3>
          <ul className="task-list">
            {
              tasks.map(currentTask => (
                <TaskComponent
                  key={Math.floor(Math.random() * 2_000_000_000) + 1} // key aleatoria  
                  description={currentTask.description}
                  deleteTask = {() => deleteTask}
                />
              ))
            }
          </ul>
        </div>
      </>
    );
  }

  function getTasksByDay(day: string) {

    const returnTasks: Task[] = [];;
    tasks.forEach(currentTask => {
      if (currentTask.day === day && currentTask.week === weekCounter) {
        returnTasks.push(currentTask);
      }
      
      
    });
    console.log(returnTasks);
    return returnTasks;

  }

  return (
    <>

      <article className="container">

        <section className="header">
          <h1>Calendario Semanal</h1>
          <img src="public/img/logo.png" alt="Logo" className="logo" />
        </section>

        <section className="week-navigation">
          <button onClick={() => setWeekCounter((weekCounter - 1) < 1 ? 1 : weekCounter - 1)}>Semana Anterior</button>
          <span>Semana {weekCounter}</span>
          <button onClick={() => setWeekCounter((weekCounter + 1) < WEEK_LIMIT ? weekCounter + 1 : WEEK_LIMIT)}>Semana Siguiente</button>
        </section>

        <Form
          addTask={addTask}
          DAYS={DAYS}
          weekCounter = {weekCounter}
        />

        <section>
          <h2>Total de tareas esta semana: 0</h2>

          <aside className="calendar">

            {
              DAYS.map(day => (
                renderTasksByDay(day)
              ))
            }

          </aside>
        </section>

      </article>

    </>
  )
}

export default App;

/*

<div className="day">
              <h3>
                Domingo (0 tareas)
              </h3>
              <ul className="task-list">
                <li>
                  Tarea1
                  <button className="delete-button">
                    🗑️
                  </button>
                </li>
              </ul>
            </div>

*/
