//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div className="card-colors">
      <h2>{props.itemData.name}</h2>
      <h3>{props.itemData.color}</h3>
    </div>
  )
}