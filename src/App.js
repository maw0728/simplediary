import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useRef, useState} from "react";

// const dummyList = [
//     {
//         id: 1,
//         author: '김',
//         content: '하마',
//         emotion: 5,
//         create_date: new Date().getTime(),
//     },
//     {
//         id: 2,
//         author: '이',
//         content: '하마나',
//         emotion: 3,
//         create_date: new Date().getTime(),
//     },
//     {
//         id: 3,
//         author: '박',
//         content: '하나마',
//         emotion: 4,
//         create_date: new Date().getTime(),
//     },
// ]


function App() {
    const [data, setData] = useState([]);

    const dataId = useRef(0)

    const onCreate = (author, content, emotion) => {
        const create_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            create_date,
            id: dataId.current
        }
        dataId.current += 1;
        setData([newItem, ...data])
    }

    const onRemove = (targetId) => {
        const newDiaryList = data.filter((it) => it.id !== targetId);
        console.log(newDiaryList);
        setData(newDiaryList);
    }

    const onEdit = (targetId, newContent) => {
        setData(data.map(it => it.id === targetId ? {...it, content: newContent} : it));
    };

    return (
        <div className="App">
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
        </div>
    );
}

export default App;
