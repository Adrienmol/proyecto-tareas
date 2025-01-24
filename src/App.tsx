//import { useState } from "react";
import Form from "./components/form";

function App() {


  return (
    <>

      <article className="container">

        <section className="header">
          <h1>Calendario Semanal</h1>
          <img src="public/img/logo.png" alt="Logo" className="logo" />
        </section>

        <section className="week-navigation">
          <button>Semana Anterior</button>
          <span>Semana X</span>
          <button>Semana Siguiente</button>
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
