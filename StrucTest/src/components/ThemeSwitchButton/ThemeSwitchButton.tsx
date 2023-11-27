import { BsSun, BsFillMoonFill } from 'react-icons/bs'
import useTheme from 'src/hooks/useTheme'

export default function ThemeSwitchButton() {
  const { currentTheme, toggleTheme } = useTheme()

  return (
    <>
      <button className='inline-block w-4 dark:text-gray-600' onClick={toggleTheme}>
        {currentTheme === 'dark' ? <BsFillMoonFill /> : <BsSun />}
      </button>
    </>
  )
}
