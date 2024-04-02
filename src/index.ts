import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`<h1>Welcome to Hono API. Server is up and running...</h1>`);
})

app.get('/app', (c) => {
  return c.json({
    ok: true,
    name: 'Yogendra',
  })
})

app.get('/app/api/:name', (c) => {
  return c.json({
    ok: true,
    id: c.req.param('name'),
  })
})

app.get('/app/name/:id', (c) => {
  return c.json({
    ok: true,
    id: c.req.param('id'),
    name: 'Yogendra',
  })
})

app.get('/entry/:id', (c) => {
  const id = c.req.param('id')
  return c.text(`Your ID is, ${id}`);
})

export default app
