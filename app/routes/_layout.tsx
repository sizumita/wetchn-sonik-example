import type { LayoutHandler } from 'sonik'
import {getTime} from "../lib/getTime";

const handler: LayoutHandler = (children) => {
  return (
    <html lang='ja'>
      <head>
        <link rel='modulepreload' href='/static/client.js' as='script' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
        <div class='wrapper'>
          <header>
            <h1>
              <a href='/'>Top</a>
            </h1>
            <p>Time: {getTime()}</p>
          </header>
          {children}
          <footer style='margin-top:2rem'>
            <small>© 2023 sizumita</small>
          </footer>
        </div>
        <script type='module' src='/static/client.js'></script>
      </body>
    </html>
  )
}

export default handler
