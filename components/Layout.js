// import Navbar from './Navbar'
import Footer from './Footer'
import Navigation from './navigation/Navigation'

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
