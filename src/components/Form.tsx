import { FormHTMLAttributes, useState } from "react";

type FormProps = {
    addTask: (day: string, week: number, description: string) => void,
    DAYS : string[],
    weekCounter: number
}

function Form({ addTask, DAYS , weekCounter}: FormProps) {
    

    // Estado para el día y la tarea
    const [formData, setFormData] = useState({
        day: "lunes", // Empieza por defecto en lunes
        task: "",
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
        const { name, value } = event.target;
        // Del evento saca el nombre (para saber si es "day" o "task") y el value (valor nuevo para esa opcion)
        setFormData((previousForm) => ({
            ...previousForm,
            [name]: value,
        }));

    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        addTask(formData.day, weekCounter, formData.task);
    }

    function renderSelectOptions() {
        return (
            <>
                {
                    DAYS.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))
                }
            </>
        )
    }

    /*


        CAMBIAR LOS DIAS. SE TIENEN QUE CARGAR DINAMICAMENTE


        
    */

    return (
        <>
            <form className="form" method="POST" onSubmit={handleSubmit}>
                <label>
                    Día:

                    <select
                        name="day"
                        value={formData.day}
                        required
                        onChange={handleChange}
                    >

                        {
                           renderSelectOptions()
                        }

    
                    </select>
                </label>
                <label>
                    Tarea:
                    <input
                        name="task"
                        type="text"
                        value={formData.task}
                        placeholder="Escribe la tarea"
                        required
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Añadir Tarea</button>
            </form>

        </>

    )
}

export default Form;