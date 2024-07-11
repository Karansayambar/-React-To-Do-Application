import "./style.css"
import { Button } from '@mui/material'
import { Add, ViewAgenda } from '@mui/icons-material'
import TaskList from '../TaskList'
import { motion } from "framer-motion";


const Sidebar = ({handleOpenTaskForm, handleOpenDetailedTaskList}) => {

  return (
    <div className='sidebar'>
        <div className='head'>
            <motion.img 
            initial={{ y: -8 }}
            animate={{ y: 8 }}
            transition={{
            type: "tween",
            repeatType: "mirror",
            duration: 2,   
            repeat: Infinity
        }}
            src='public\icons8-todo-list-100.png'/>
            <h3><i className='logo-font'>TO-DO</i></h3>
        </div>
        <div className='btns'>
            <Button variant="contained" onClick={handleOpenTaskForm} startIcon={<Add />} sx={{ height: 40 }}>
          Add Task
        </Button>
            <Button variant="contained" startIcon={<ViewAgenda /> } sx={{height : 40}} onClick={handleOpenDetailedTaskList}> View Tasks</Button>
        </div>
        <div>
            <TaskList/>
        </div>
    </div>
  )
}

export default Sidebar