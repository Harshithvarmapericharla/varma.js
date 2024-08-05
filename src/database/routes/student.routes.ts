import express, { Request, Response } from 'express';
import Student from '../models/student'; 

const studentRoute = express.Router();

studentRoute.use(express.json());

// GET all students
studentRoute.get('/student', async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST a new student
studentRoute.post('/students', async (req: Request, res: Response) => {
  const { studentId, studentName, age } = req.body;

  try {
    const newStudent = await Student.create({ studentId, studentName, age });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT update a student by their studentName
studentRoute.put('/students/:studentName', async (req: Request, res: Response) => {
  const { studentName } = req.params;
  const { newStudentName, age } = req.body;

  try {
    const studentToUpdate = await Student.findOne({ where: { studentName } });

    if (!studentToUpdate) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Update only the fields provided
    if (newStudentName) studentToUpdate.studentName = newStudentName;
    if (age) studentToUpdate.age = age;
    
    await studentToUpdate.save();
    res.json(studentToUpdate);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE a student by their ID
studentRoute.delete('/students/:studentId', async (req: Request, res: Response) => {
  const { studentId } = req.params;

  try {
    const studentToDelete = await Student.findByPk(studentId);

    if (!studentToDelete) {
      return res.status(404).json({ error: 'Student not found' });
    }

    await studentToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default studentRoute;
