
var express = require('express')
  , app = express();

app.use(express.logger('dev'));
app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);
