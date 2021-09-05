import { useState } from 'react'
import './App.css'
import { AppContainer } from './App.styles'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact.jsx';

function App() {
	const [darkMode, setdarkMode] = useState(true)

	return (
		<AppContainer darkMode={darkMode}>
			<Home
				darkMode={darkMode}
				setDarkMode={(flag) => setdarkMode(flag)}
			/>
			<About darkMode={darkMode} />
			<Skills darkMode={darkMode}/>
			<Work darkMode={darkMode}/>
			<Contact darkMode={darkMode}/>
		</AppContainer>
	)
}

export default App
