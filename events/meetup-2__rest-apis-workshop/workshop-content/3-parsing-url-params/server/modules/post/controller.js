import Post from './model';


export const createPost =	async (req, res) => {
  const { title, description, category, subCategory } = req.body;
	const newPost = new Post({ title, description, category, subCategory });
	try {
		return res.status(201).json({ post: await newPost.save() })
	} catch(e) {
		return res.status(e.status).json({ error: true, message: 'Error with Post' });
	}
}


export const getAllPosts = async (req, res) => {
  const params = req.query;
  console.log('Query Params Object:', params);
	try {
		return res.status(200).json({ posts: await Post.find({ ...params }) });
	} catch (e) {
		return res.status(e.status).json({ error: true, message: 'Error with Post' });
	}
}

export const getPost = async (req, res) => {
  console.log('URL Params Object:', req.params)
  const { id } = req.params
  try {
    return res.status(200).json({ posts: await Post.find({ _id: id }) });
  } catch (e) {
		return res.status(e.status).json({ error: true, message: 'Error with Post' });
	}
}