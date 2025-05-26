import React, {useState} from 'react';


function WorkCoal() {
    const [text,setText] = useState('');
    const [messages,setMessages] = useState([])
    const handleAdd = () => {
        if (text.trim() !== '') {
            setMessages([...messages, { text: text, active: false }]);
            setText('');
        }
    };

    const handleDelete = (deleteIndex) =>{
        setMessages(messages.filter((_,index)=>index!==deleteIndex))
    }
    const activeCheck = (activeIndex) =>{
        setMessages(
            messages.map((message,index)=>
                index===activeIndex
                    ?{...message,active:!message.active}
                    :message
            )
        )
    }
    return (
        <div style={{textAlign:'center'}}>
            <h1>Введите задачи:</h1>
            <input
                type="text"
                placeholder="Введите сообщение"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={handleAdd}>Добавить задачу</button>
            <button onClick={()=>setText('')}>Очистить</button>
            <h2>Список задач:</h2>
            <ul>
                {messages.map((message,index)=>(
                    <li key={index}>
                        {message.text}
                    <button onClick={()=>handleDelete(index)}>Удалить задачу</button>
                        <input
                            type={"checkbox"}
                            checked={message.active}
                            onChange={()=>activeCheck(index)}/>

                    </li>
                ))}
            </ul>
            <button onClick={()=>setMessages([])}>Очистить список задач</button>
        </div>
    )
}
export default WorkCoal;