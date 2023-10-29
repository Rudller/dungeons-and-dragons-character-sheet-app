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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/character-sheet-creator' element={<CharacterSheetCreator />} />
        <Route path='/empty-chatacter-sheet' element={<EmptyCharacterSheet />}/>
      </Routes>
    </Router>
  )
}