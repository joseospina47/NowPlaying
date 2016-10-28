const app     = require('express')();
const bodyParser = require('body-parser');
const routes  = require('./app/routes');

/**
 * Server configuration
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(8001, () => {
  console.log('Server listening on port 8001');
})
