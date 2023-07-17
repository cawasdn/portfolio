import useWindowResize from '../../hooks/useWindowResize'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

function Navigation() {
  const { width, height } = useWindowResize()
  // console.log(width, height)

  return (
    <div className='App'>{width > 768 ? <NavDesktop /> : <NavMobile />}</div>
  )
}

export default Navigation
