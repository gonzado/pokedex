import "../sass/Card.scss"

function Card(name, img) {
  return (
    <div className="card">
      <p className="card-name">{name.name}</p>
      <div className="card-circle"></div>
      <img src= {img.img} alt="pokemon img" className="card-img" />
    </div>
  )
}

export {Card}
