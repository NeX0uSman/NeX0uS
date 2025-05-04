import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layout