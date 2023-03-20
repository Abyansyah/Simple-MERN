import express from 'express';
import { getUsers, getUsersById, saveUsers, updateUsers, deleteUsers } from '../controllers/UserController.js';
const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', saveUsers);
router.patch('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

export default router;
