import '../App.css'
export default function NavItem({ href, navi, isActive }) {
    return (
      <li className='nil'>
        <a
          href={href}
          className={isActive ? 'nvac' : 'nva'}
        >
          {navi}
        </a>
      </li>
    )
  }
  