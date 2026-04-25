import './App.css'
import profilePic from './assets/profile-pic.jpeg'
import inLogo from './assets/InBug-Black.png'
import githubLogo from './assets/GitHub_Invertocat_Black.png'
import gmailLogo from './assets/gmail_logo_PNG12.png'
const App  = () => {
  return (
    <section className="bg-midnight-green">
      <header>
        <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-rosy-brown border-green-950 rounded-b-sm">
          <ul className="flex justify-center
             px-2.0 py-2.5 text-green-950
            gap-1.5
           ">
            <li className="text-1.5xl font-gotu" >Home</li>
            <li className="text-1.5xl font-gotu">Projects</li>
            <li className="text-1.5xl font-gotu">About</li>
          </ul>
        </nav>
      </header>

      <section className=" m-4 px-0.5 py-5 bg-linear-45 from-moss-green to-rosy-brown rounded-2xl">
        <section className="grid grid-cols-2 gap-2">
          <section className="m-3 px-1.5 py-1.5 bg-white/30 backdrop-opacity-60 rounded-[20px]">
          <p className="w-[522px] justify-start text-emerald-950 text-4xl font-kaisei-decol font-bold">
            Hello, I'm Hibatul Muqeet</p>
          <section className='flex col-span-2'>
            <p className="text-2xl font-kaisei-decol">Software </p>
            <p className="text-2xl font-kaisei-decol font-extrabold"> Engineer</p>
          </section>
          <p className="text-0.5xl font-kaisei-decol">Hibatul is a software engineer based in Chicagoland area.
            She makes intuitive user-facing applications that solve real-world problems. 
            Check out her projects! </p>
          </section>
          <section>
            <img className="w-[470px] h-[508px] rounded-[273px]" src={profilePic} alt='Profile picture'></img>
          </section>
        </section>
        <section className="grid grid-cols-4 gap-0.1 place-items-center">
          <button className="px-2 w-16 h-12 bg-midnight-green font-gotu text-amber-50 rounded-2xl">Projects➡️</button>
          <img className=" px-2 w-16 h-12" src={githubLogo} />
          <img loading="lazy" className=" px-2 w-16 h-12 " src={inLogo}/>
          <img className="px-2 w-16 h-16" loading="lazy" src={gmailLogo}/> 
        </section>
               
      </section>
      
    </section>
  )
}

export default App
