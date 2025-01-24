import { useState } from "react";


function Form() {

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
    }

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
                        <option key="lunes" value="lunes">Lunes</option>
                        <option key="martes" value="martes">Martes</option>
                        <option key="miercoles" value="miercoles">Miércoles</option>
                        <option key="jueves" value="jueves">Jueves</option>
                        <option key="viernes" value="viernes">Viernes</option>
                        <option key="sabado" value="sabado">Sábado</option>
                        <option key="domingo" value="domingo">Domingo</option>

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