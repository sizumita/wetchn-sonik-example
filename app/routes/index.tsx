import Counter from '../islands/Counter'
import {getTime} from "../lib/getTime";

export default function Home() {
  return (
    <div>
      <h2>
        Hello <a href='/about/me'>me</a>!
      </h2>
        <p>time: {getTime()}</p>
      <Counter />
    </div>
  )
}
