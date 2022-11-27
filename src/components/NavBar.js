import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to="/" className='site-title'>Programa de Matrices</Link>
      <ul>
        <CustomLink to="/determinants">Determinantes</CustomLink>
        <CustomLink to="/vectors">Vectores</CustomLink>
        <CustomLink to="/ejemplos-determinantes">Ejemplos de determinantes</CustomLink>
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