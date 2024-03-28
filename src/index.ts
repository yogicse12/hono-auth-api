import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Yogendra Yadav')
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

export default app
