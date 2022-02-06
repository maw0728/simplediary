import DiaryItem from "./diaryItem";

const DiaryList = ({diaryList}) => {
    return <div className="DiaryList">
        <h2>일기리스트</h2>
        <h4>{diaryList.length}</h4>
        <div>
            {diaryList.map((it) => (
                <DiaryItem key={it.id} {...it}/>
            ))}
        </div>
    </div>
}
DiaryList.defaultProps = {
    diaryList: []
}
export default DiaryList;