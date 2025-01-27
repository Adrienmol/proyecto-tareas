
type TaskProps = {
    description: String;
}

function TaskComponent({description} : TaskProps) {

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