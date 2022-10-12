const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');

// this is geting our routes from the controlers folder
const routes = require('./controllers');

// requiring squilize connetion
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;
// seting max age to 24 hours
const sess = {
  secret: 'secret',
  cookie: { maxAge: 24 * 60 * 60 * 10000},
  resave: false,
  saveUninitialized: true,
// saves data to database
  store: new SequelizeStore({
  db: sequelize,
  }),
};

app.use(session(sess));

// establishing handle bars as engine
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// sets static path for everything in the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
