import express from 'express';
const app = express();
import { default as Logger } from './config/logger';
import { default as environment } from './config/environment';
import router from './routes';
import cors from 'cors'

app.use(express.json());
app.use(express.static('public'))

//app.disable('etag')
app.use(
  cors({
    origin: true,
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'Cookie',
      'Set-Cookie',
      'Cache-Control'
    ]
  })
)

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use( ( req, res, next ) => {
  setTimeout(next, Math.floor( ( Math.random() * 2000 ) + 100 ) );
});
app.use('/', router);




app.listen(environment.port, () => {
  Logger.info(`
       ################################################
       🛡️  Server listening on port: ${environment.port} 🛡️
       ################################################
     `);
});


