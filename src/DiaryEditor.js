import {useState} from "react";

const DiaryEditor = () => {
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: "",
    })

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log(state);
    }
    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");
    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input name="author" value={state.author} onChange={(e) => {
                    setState({
                        ...state,
                        author: e.target.value,
                    });
                }}/>
                <div>
                    <textarea name="content" value={state.content} onChange={handleChangeState}/>
                </div>
                <div><label>오늘의 감정 점수 : </label>
                    <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSubmit}>일기 저장하기</button>
                </div>
            </div>
        </div>
    );
}
export default DiaryEditor;