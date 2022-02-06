import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
    {
        id: 1,
        author: '김',
        content: '하마',
        emotion: 5,
        create_date: new Date().getTime(),
    },
    {
        id: 2,
        author: '이',
        content: '하마나',
        emotion: 3,
        create_date: new Date().getTime(),
    },
    {
        id: 3,
        author: '박',
        content: '하나마',
        emotion: 4,
        create_date: new Date().getTime(),
    },
]


function App() {
    return (
        <div className="App">
            <DiaryEditor/>
            <DiaryList diaryList={dummyList}/>
        </div>
    );
}

export default App;
