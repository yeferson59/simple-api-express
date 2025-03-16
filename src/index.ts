import express, { Request, Response, Application } from 'express';

// Initialize the express application
const app: Application = express();
const PORT: number = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic GET route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the Express TypeScript API',
    status: 'Server is running',
    time: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

export default app;

