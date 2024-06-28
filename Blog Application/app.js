import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import indexRoutes from './routes/index.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); //bodyParser middleware helps us to collect data entered into an html form
app.use(methodOverride('_method'));

app.use('/', indexRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
