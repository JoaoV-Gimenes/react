export default function Input( props ){
    
    return(
        <input onChange={props.onChange} value={props.value} className="border-2 border-solid border-black-500 rounded-xl p-1"></input>
    )
}