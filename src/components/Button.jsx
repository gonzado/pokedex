import "../sass/Button.scss"

function Button({icon, onClick}) {
  return (
    <button 
      className="btn"
      onClick={onClick}>
      {icon}
    </button>
  )
}

export {Button}
