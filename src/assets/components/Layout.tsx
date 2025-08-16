import Nav from './layoutUi/Nav'
import Footer from './layoutUi/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}
