
type TaskProps = {
    description: string;
    deleteTask : (description: string, week: number, day: string) => void
    week : number
    day : string
}

function TaskComponent({description, deleteTask, week, day} : TaskProps) {
    
    return (
        <>
            <li>
                {description}
                <button className="delete-button" onClick={() => deleteTask(description, week, day)}>
                    🗑️
                </button>
            </li>
        </>

    );
}

export default TaskComponent;