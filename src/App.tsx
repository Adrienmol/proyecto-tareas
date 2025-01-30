//import { useState } from "react";
import { useEffect, useState } from "react";
import Form from "./components/Form.tsx";
import TaskComponent from "./components/TaskComponent.tsx";
import { Task } from "./types/index.ts";



function App() {

  const DAYS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
  // Limite de semanas --> 52
  const WEEK_LIMIT = 52;

  // Función para calcular  el número de semana del año actual al iniciar por primera vez la app
  const getCurrentWeek = () =>
    Math.ceil((Date.now() - new Date(new Date().getFullYear(), 0, 1).getTime() +
      (new Date(new Date().getFullYear(), 0, 1).getDay() - 1) * 86400000) / (7 * 24 * 3600 * 1000));

  const [weekCounter, setWeekCounter] = useState(
    localStorage.getItem('weekCounter') == null
      ? getCurrentWeek()
      : JSON.parse(localStorage.getItem('weekCounter')!)
  );

  // Colección global de tareas.
  const [tasks, setTasks] = useState<Task[]>(
    localStorage.getItem('tasks') == null
      ? []
      : JSON.parse(localStorage.getItem('tasks')!) //El ! para asegurar de que no va a ser null
  );

  // Oyente para actualizar LocalStorage con los cambios de Tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('weekCounter', JSON.stringify(weekCounter))
  }, [tasks, weekCounter])

  function addTask(day: string, week: number, description: string) {
    const newTask: Task = { day, week, description };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  function deleteTask(description: string, week: number, day: string) {
    setTasks(prevTasks => prevTasks.filter(task =>
      !(task.description === description && task.week === week && task.day === day)
    ));
  }

  const totalWeekTasks = () => {
    let count = 0;
    tasks.map(task => (
      task.week === weekCounter
        ? count++
        : count = count
    ))
    return count;
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
              currentDayTasks.map(currentTask => (
                <TaskComponent
                  key={`${currentTask.description}-${currentTask.week}-${currentTask.day}`}
                  description={currentTask.description}
                  deleteTask={deleteTask}
                  week={currentTask.week}
                  day={currentTask.day}
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
          <img src="/img/logo.png" alt="Logo" className="logo" />
        </section>

        <section className="week-navigation">
          <button onClick={() => setWeekCounter((weekCounter - 1) < 1 ? 1 : weekCounter - 1)}>Semana Anterior</button>
          <span>Semana {weekCounter}</span>
          <button onClick={() => setWeekCounter((weekCounter + 1) < WEEK_LIMIT ? weekCounter + 1 : WEEK_LIMIT)}>Semana Siguiente</button>
        </section>

        <Form
          addTask={addTask}
          DAYS={DAYS}
          weekCounter={weekCounter}
        />

        <section>
          <h2>Total de tareas esta semana: {totalWeekTasks()}</h2>

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
