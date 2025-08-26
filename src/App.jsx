import Button from './components/Button/Button'
import Title from './components/Header/Header'
import Paragraph from './components/Paragraph/Paragraph'
import './App.css'

function App() {

  return (
    <>
      <Title text="Поиск" />
      <Paragraph width="588px" height="100px" fontSize="16px" text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное" />
      <Button text="Искать" />
    </>
  )
}

export default App
