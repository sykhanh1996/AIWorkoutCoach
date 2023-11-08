import { BsSun } from 'react-icons/bs'

export default function ThemeSwitchButton() {
  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <>
      <button className='inline-block w-4' onClick={toggleTheme}>
        <BsSun
          style={{
            innerHeight: '50px'
          }}
        />
      </button>
    </>
  )
}
