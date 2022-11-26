import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to="/" className='site-title'>Matrix Calculator</Link>
      <ul>
        <CustomLink to="/determinants">Determinants</CustomLink>
        <CustomLink to="/vectors">Vectors</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink ({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={ isActive ? "active" :""}>
      <Link to={to} {...props}> {children} </Link>

    </li>
  )
}