import { createApp } from 'sonik'
import { preload } from 'sonik/middleware/preload'
import { Hono } from 'hono/tiny'
import { serveStatic } from 'hono/cloudflare-workers'
import {etch} from "./wetch";

const base = new Hono()

base.get(
  '*',
  preload({
    manifestPath: 'static/manifest.json',
  })
)

const app = createApp({ app: base })

app.get('/static/*', serveStatic({ root: './' }))

app.showRoutes()

export default etch(app)
