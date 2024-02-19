/* eslint-disable react/prop-types */
import {useDroppable} from '@dnd-kit/core';

export default function Hand(props) {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });
    const styles = {
        backgroundColor: isOver ? 'green' : undefined,
    };

    console.log(props)

    return (
        <div className="hand" ref={setNodeRef} style={styles}>
            <h2>Hand</h2>
            {props.children}
        </div>
    )
}