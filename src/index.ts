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

app.get('/app/api/:id', (c) => {
  return c.json({
    ok: true,
    id: c.req.param('id'),
  })
})

export default app
