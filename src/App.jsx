import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CharacterSheetCreator from './components/CharacterSheetCreator';
import EmptyCharacterSheet from './components/EmptyCharacterSheet';
import CharSheet from './components/CharSheet';
import { useState } from 'react';
import Dev from './components/Dev';

export default function App() {
  const [stats, setStats] = useState()

  return (
    <Router>
      <Routes>
        <Route path='/dev' element={<Dev />} />
        <Route path='/' element={<Home callback={setStats} />}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/character-sheet-creator' element={<CharacterSheetCreator />} />
        <Route path='/empty-chatacter-sheet' element={<EmptyCharacterSheet />}/>
        <Route path='/char-sheet' element={<CharSheet stats={stats} />}/>
      </Routes>
    </Router>
  )
}