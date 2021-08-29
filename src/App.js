import { useState, useEffect } from 'react'
import './App.css'
import { AppContainer } from './App.styles'
import Home from './sections/Home/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
	const [darkMode, setdarkMode] = useState(true)
	useEffect(() => {
		AOS.init({
			duration: 1000,
		})
	}, [])

	return (
		<AppContainer darkMode={darkMode}>
			<Home
				darkMode={darkMode}
				setDarkMode={(flag) => setdarkMode(flag)}
			/>
		</AppContainer>
	)
}

export default App
