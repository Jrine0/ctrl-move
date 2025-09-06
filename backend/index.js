import 'dotenv/config'
import { clerkMiddleware, clerkClient, requireAuth, getAuth } from '@clerk/express'
import express from 'express'
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('Backend Running'));
app.get('/protected', requireAuth(), async (req, res) => {
  const { userId } = getAuth(req)
  const user = await clerkClient.users.getUser(userId)
  return res.json({ user })
})

app.listen(port, () => {
  console.log('Server running at : http://localhost:3000/');
  console.log("Ctrl+C to exit");
});