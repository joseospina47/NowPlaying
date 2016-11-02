const app         = require('express')();
const cors        = require('cors')
const bodyParser  = require('body-parser');
const routes      = require('./app/app.routes');

/**
 * Server configuration
 */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

app.listen(8001, () => {
  console.log('Server listening on port 8001');
})
