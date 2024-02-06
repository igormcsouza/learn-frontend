import { Github, Globe, Instagram, Linkedin, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react"

interface CardProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Card({ darkMode, toggleDarkMode }: CardProps) {
  return (
    <div className="bg-zinc-300 dark:bg-zinc-800 rounded-md xs:mx-0 mx-5 xs:max-w-md w-auto h-auto p-3 space-y-3">
      <div className="flex flex-1 justify-between flex-row items-center">
        <h1 className="font-bold text-zinc-950 text-xl dark:text-zinc-200">
          Set up a Dark Mode
        </h1>
        <button className="bg-transparent hover:bg-zinc-500 rounded-full p-2 flex justify-center items-center" onClick={toggleDarkMode}>
          {darkMode ?
            <SunIcon className="text-zinc-200" /> :
            <MoonIcon className="text-zinc-950" />
          }
        </button>
      </div>
      <div>
        <p className="text-zinc-950 dark:text-zinc-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          ea reiciendis veritatis aliquid aspernatur temporibus sit,
          explicabo cum quidem quia animi placeat, rerum inventore quaerat
          qui ducimus harum delectus modi?
        </p>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="bg-zinc-300 dark:bg-zinc-800 flex flex-1 justify-evenly items-center gap-3 py-4">
      <div className="flex justify-between flex-wrap gap-3">
        <a
          className="bg-transparent hover:bg-zinc-500 rounded-full p-2 flex justify-center items-center"
          href="https://github.com/igormcsouza"
          target="_blank">
          <Github className="text-zinc-950 dark:text-zinc-200"/>
        </a>
        <a
          className="bg-transparent hover:bg-zinc-500 rounded-full p-2 flex justify-center items-center"
          href="https://www.instagram.com/igormcsouza/"
          target="_blank">
          <Instagram className="text-zinc-950 dark:text-zinc-200" />
        </a>
        <a
          className="bg-transparent hover:bg-zinc-500 rounded-full p-2 flex justify-center items-center"
          href="https://igormcsouza.github.io"
          target="_blank">
          <Globe className="text-zinc-950 dark:text-zinc-200" />
        </a>
        <a
          className="bg-transparent hover:bg-zinc-500 rounded-full p-2 flex justify-center items-center"
          href="https://www.linkedin.com/in/igormcsouza"
          target="_blank">
          <Linkedin className="text-zinc-950 dark:text-zinc-200" />
        </a>
      </div>
    </div>
  )
}

function App() {
  const [darkMode, toggleDarkMode] = useState<boolean>(window.matchMedia("(prefers-color-scheme: dark)").matches)

  function changeDarkModeTheme() {
    toggleDarkMode(!darkMode)
    localStorage.setItem("darkModePreference", darkMode ? "light" : "dark")
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-zinc-200 dark:bg-zinc-900 h-screen">
        <main className="flex h-full justify-center items-center">
          <Card darkMode={darkMode} toggleDarkMode={() => changeDarkModeTheme()}/>
        </main>
        <footer className="fixed bottom-0 left-0 w-full">
          <Contact />
        </footer>
      </div>
    </div>
  )
}

export default App
