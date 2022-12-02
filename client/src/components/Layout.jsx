import { Outlet } from "react-router-dom"
import Navigation from './Navigation'
import Footer from "../components/Footer";

export default function Layout(){
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	)
}