import { MessageCircle } from 'lucide-react';
import { dataContent } from '../../../data'
import './header.css'
import '../../index.css'

export const Header = () => {
  return (
    <>
      <header className='container'>
        <div className='limited'>
          <h1 className='logo'>{dataContent.header.logo}</h1>
          <nav className='nav-header'>
            <ul>
              {dataContent.header.ullist.map((li, index) => (
                <ul key={index}>{li.list}</ul>
              ))}
            </ul>
          </nav>
          <button id='btnheader' className='btndefault'>  <MessageCircle/> {dataContent.header.btnheader}</button>
        </div>
      </header>
    </>
  )
}