import{ useState } from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import "../App.css"
import TaskForm from '../components/TaskForm'
import DetailedTaskList from '../components/DetailedTaskList'

const MainPage = () => {
    const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
    const [isDetailedTaskVisible, setIsDetailedTaskVisible] = useState(false);

  const handleOpenTaskForm = () => {
    setIsTaskFormVisible(true);
    setIsDetailedTaskVisible(false)
  };

   const handleOpenDetailedTaskList = () => {
    setIsDetailedTaskVisible(true);
    setIsTaskFormVisible(false); // Hide TaskForm when opening DetailedTaskList
  };

  const handleCloseTaskForm = () => {
    setIsTaskFormVisible(false);
  };

   const handleCloseDetailedTaskList = () => {
    setIsDetailedTaskVisible(false);
  };
  return (
    <div className='main-container'>
        <Sidebar handleOpenTaskForm={handleOpenTaskForm} handleOpenDetailedTaskList={handleOpenDetailedTaskList}/>
         <Container>
        {(isTaskFormVisible && !isDetailedTaskVisible) && <TaskForm onClose={handleCloseTaskForm} />}
        {(isDetailedTaskVisible && !isTaskFormVisible) && <DetailedTaskList onClose={handleCloseDetailedTaskList} />}
        {!isTaskFormVisible && !isDetailedTaskVisible && <img src="/Pngtree-blue.png" className="task-icon" alt="Task Icon" />}
      </Container>
        
    </div>
  )
}

export default MainPage