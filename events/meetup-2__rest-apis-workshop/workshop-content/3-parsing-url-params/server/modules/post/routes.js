import { Router } from 'express';
import * as PostController from './controller';

const routes = new Router();

// Route for creating post
routes.post('/post', PostController.createPost);

// Route for getting all Posts
routes.get('/post', PostController.getAllPosts);

// Route for getting single Post with the help of Url Param
routes.get('/post/:id/:test', PostController.getPost);

export default routes;
