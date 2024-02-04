import { Link } from 'react-router-dom'

function MyInformation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>My Information</h1>

      <p>on My Information page</p>
      <h2 className="text-8xl font-bold underline">Hello world!</h2>
    </div>
  )
}

export default MyInformation
