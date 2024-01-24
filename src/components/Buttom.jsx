import "../sass/Buttom.scss"

function Buttom({icon, onClick}) {
  return (
    <button 
      className="btn"
      onClick={onClick}>
      {icon}
    </button>
  )
}

export {Buttom}
