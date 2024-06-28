import express from 'express';
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/post/myposts',(req,res) => {
    res.render('myPosts',{posts})
})

router.get('/post/new', (req, res) => {
    res.render('newPost');
});

router.post('/post/createnew', (req, res) => {
    const { title, content } = req.body;
    const id = posts.length+1; //If the length of the posts array is 2, the id of the new element will be 2.
    posts.push({ id, title, content });
    res.redirect('/post/myposts');
});

router.get('/post/:id/edit', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render('editPost', { post });
});

//Update request
router.post('/post/:id/update', (req, res) => {
    const { title, content } = req.body;
    const post = posts.find(p => p.id == req.params.id);
    post.title = title;
    post.content = content;
    res.redirect('/post/myposts');
});

router.post('/post/:id/delete', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect('/post/myposts');
});

export default router;
