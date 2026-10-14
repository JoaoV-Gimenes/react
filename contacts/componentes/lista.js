export default function Lista(props){
    const todos = props.Dados
    return(
        <section>
            {todos.length > 0 && todos.map((cada) => (<li key={cada.id}>
                <div>
                    <h3>{cada.nome}</h3>
                    <span>{cada.numero}</span>
                </div>
            </li>))}
        </section>
    )
}