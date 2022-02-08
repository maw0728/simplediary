import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useEffect, useMemo, useRef, useState} from "react";
import Lifecycle from "./Lifecycle";

// https://jsonplaceholder.typicode.com/posts

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

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());

        const initData = res.slice(0, 20).map((it) => {
            return {
                author: it.email,
                content: it.body,
                emotion: Math.floor(Math.random() * 5) + 1,
                create_date: new Date().getTime(),
                id: dataId.current++,

            }
        });
        setData(initData);
    }

    useEffect(() => {
        getData();
    }, []);

    const onCreate = (author, content, emotion) => {
        const create_date = new Date().getTime();
        const newItem = {
            author, content, emotion, create_date, id: dataId.current
        }
        dataId.current += 1;
        setData([newItem, ...data])
    }

    const onRemove = (targetId) => {
        const newDiaryList = data.filter((it) => it.id !== targetId);
        console.log(newDiaryList);
        setData(newDiaryList);
    };

    const onEdit = (targetId, newContent) => {
        setData(data.map(it => it.id === targetId ? {...it, content: newContent} : it));
    };

    const getDiaryAnalysis = useMemo(() => {
        console.log('일기 분석 시작');

        const goodCount = data.filter(it => it.emotion >= 3).length;
        const badCount = data.length - goodCount;
        const goodRatio = (goodCount / data.length) * 100;
        return {goodCount, badCount, goodRatio};
    }, [data.length])

    const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

    return (<div className="App">
        <Lifecycle/>
        <DiaryEditor onCreate={onCreate}/>
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수 : {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
        <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>);
}

export default App;
