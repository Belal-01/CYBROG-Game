
const NavItem = (props) => {
  const name = props.name;
 const isActiv = props.isActiv
  return (
    <li className={ `nav-item nav-list-item ${isActiv&& "isClicked"}`} onClick={()=>props.handelClick(name)}>
      {props.children}
    </li>
  )
}

export default NavItem
