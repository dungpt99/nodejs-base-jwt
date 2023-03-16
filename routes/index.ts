import express from 'express';
import  { NextFunction, Request, Response } from 'express';
import AuthRoutes from '@components/routes/AuthRoutes';

const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('index', { title: 'Node Base JWT' });
});

router.use('/api/auth', AuthRoutes);

export default router;
