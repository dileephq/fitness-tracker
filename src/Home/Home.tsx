import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/my-information">My Information</Link>

      <p>on Home page</p>
    </div>
  )
}

export default Home
