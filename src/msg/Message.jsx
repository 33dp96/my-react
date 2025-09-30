export default function Message ({word = 'hi how are you?'}){
    return(
        <div>
            <h2 style={{color: 'red'}}>{word}</h2>
        </div>
    )
}