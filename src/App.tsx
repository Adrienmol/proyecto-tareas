//import { useState } from "react";
import { useState } from "react";
import Form from "./components/Form.tsx";
import TaskComponent from "./components/TaskComponent.tsx";
import { Week, Day, Task } from "./types/index.ts";

function App() {

  // Limite de semanas --> 52
  const [weekCounter, setWeekCounter] = useState(1);

  const [weeks, setWeeks] = useState(

  );



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
          <button onClick={() => setWeekCounter((weekCounter + 1) < 52 ? weekCounter + 1 : 52)}>Semana Siguiente</button>
        </section>

        <Form />

        <section>
          <h2>Total de tareas esta semana: 0</h2>

          <aside className="calendar">

            <div className="day">
              <h3>
                Lunes (0 tareas)
              </h3>
              <ul className="task-list">

                <TaskComponent
                  description={"Prueba"}
                />

              </ul>
            </div>

            <div className="day">
              <h3>
                Martes (0 tareas)
              </h3>
              <ul className="task-list">



              </ul>
            </div>

            <div className="day">
              <h3>
                Miércoles (0 tareas)
              </h3>
              <ul className="task-list">



              </ul>
            </div>

            <div className="day">
              <h3>
                Jueves (0 tareas)
              </h3>
              <ul className="task-list">



              </ul>
            </div>

            <div className="day">
              <h3>
                Viernes (0 tareas)
              </h3>
              <ul className="task-list">



              </ul>
            </div>

            <div className="day">
              <h3>
                Sábado (0 tareas)
              </h3>
              <ul className="task-list">



              </ul>
            </div>

            <div className="day">
              <h3>
                Domingo (0 tareas)
              </h3>
              <ul className="task-list">



              </ul>
            </div>

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
