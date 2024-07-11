import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import "./style.css";
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/action';

const TaskForm = ({ onClose, taskToEdit }) => {
  const dispatch = useDispatch();

  // State variables for form fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(dayjs());

  // Effect to populate form fields when taskToEdit changes
  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name || "");
      setDescription(taskToEdit.description || "");
      setCategory(taskToEdit.category || "");
      setStatus(taskToEdit.status || "");
      setStartDate(dayjs(taskToEdit.startDate));
      setEndDate(dayjs(taskToEdit.endDate));
      setStartTime(dayjs(taskToEdit.startTime));
      setEndTime(dayjs(taskToEdit.endTime));
    }
  }, [taskToEdit]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare task object from form data
    const updatedTask = {
      name,
      description,
      category,
      status,
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
      startTime: startTime.format('HH:mm'),
      endTime: endTime.format('HH:mm'),
    };

    if (taskToEdit) {
      // If taskToEdit exists, dispatch editTask action
      dispatch(editTask(taskToEdit.id, updatedTask));
    } else {
      // Otherwise, dispatch addTask action
      const newTask = {
        id: new Date().getTime().toString(), // Generate unique ID
        ...updatedTask,
      };
      dispatch(addTask(newTask));
    }

    // Reset form fields and close the form
    resetForm();
    onClose();
  };

  // Function to reset form fields
  const resetForm = () => {
    setName("");
    setDescription("");
    setCategory("");
    setStatus("");
    setStartDate(dayjs());
    setEndDate(dayjs());
    setStartTime(dayjs());
    setEndTime(dayjs());
  };

  return (
    <div className='task-form'>
      <h2 id="modal-title">{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', paddingBottom: "1rem" }}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newDate) => setStartDate(newDate)}
              renderInput={(params) => <TextField {...params} variant="outlined" margin="normal" fullWidth required />}
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newDate) => setEndDate(newDate)}
              renderInput={(params) => <TextField {...params} variant="outlined" margin="normal" fullWidth required />}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
            <TimePicker
              label="Start Time"
              value={startTime}
              onChange={(newTime) => setStartTime(newTime)}
              renderInput={(params) => <TextField {...params} variant="outlined" margin="normal" fullWidth required />}
            />
            <TimePicker
              label="End Time"
              value={endTime}
              onChange={(newTime) => setEndTime(newTime)}
              renderInput={(params) => <TextField {...params} variant="outlined" margin="normal" fullWidth required />}
            />
          </Box>
        </LocalizationProvider>
        <Button type="submit" variant="contained" color="primary" sx={{marginTop : "1rem"}}>
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </Button>
      </form>
    </div>
  );
}

export default TaskForm;
