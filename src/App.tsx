import { TodosProvider } from './context/todos.context'
import { TodosPage } from './pages/Todos'

function App() {
  return (
    <TodosProvider>
      <TodosPage />
    </TodosProvider>
  )
}

export default App
