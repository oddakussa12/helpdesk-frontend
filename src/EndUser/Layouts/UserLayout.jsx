import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1' }}>
        <NavBar />
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <Outlet />
        </div>
      </div>
      <div style={{ position: 'sticky', color: 'white', textAlign: 'center', padding: '1em', bottom: '0' }}>
        <Footer />
      </div>
    </div>
  )
}

export default UserLayout
