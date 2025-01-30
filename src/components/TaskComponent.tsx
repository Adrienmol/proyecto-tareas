
type TaskProps = {
    description: string;
    deleteTask : () => void
}

function TaskComponent({description} : TaskProps) {
    
    function deleteTask() {
        
    }

    return (
        <>
            <li>
                {description}
                <button className="delete-button">
                    🗑️
                </button>
            </li>
        </>

    );
}

export default TaskComponent;