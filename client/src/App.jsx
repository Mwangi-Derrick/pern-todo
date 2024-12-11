import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'
function App() {
 
  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-semibold'>PERN TODO</h1>
        <InputTodo />
        <ListTodo/>
    </div>
    </>
  )
}

export default App
