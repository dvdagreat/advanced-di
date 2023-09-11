import 'reflect-metadata';
import express from 'express'
import { registerContainer } from './register-container';
import * as Interceptors from './interceptors';

const app = express();
const port = 8000;

app.use('*', registerContainer as any);
app.get('/', (new Interceptors.GetAllBlogs).intercept as any);

app.listen(port, () => console.log(`app started at port ${port}`));
