import "./style.css"

const Container = ({children}) => {
  return (
    <div className="container">
      {children ? <div>{children}</div> : <img src="/Pngtree-blue.png" className="task-icon" alt="Task Icon" />}
    </div>
  )
}

export default Container