import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout
