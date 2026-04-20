import './App.css'

const App  = () => {
  return (
    <body className="bg-gray-900">
      <header>
        <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <ul className="flex justify-center
             px-1.5 py-2.5 text-amber-50
            gap-1.5 bg-linear-to-tr from-pink-950 to-pink-500
           ">
            <li><img src="/src/assets/web-logo.png" className="mask-auto mx-0">
            </img></li>
            <li className="text-1.5xl" >Home</li>
            <li className="text-1.5xl">Projects</li>
            <li className="text-1.5xl">About</li>
          </ul>
        </nav>
      </header>
      
    </body>
  )
}

export default App
