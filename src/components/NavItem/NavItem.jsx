import { memo } from "react";
const NavItem = (props) => {
  const name = props.name;
 const isActiv = props.isActiv;
//  console.log('inside nave item')
  return (
    <li className={ `nav-item nav-list-item ${isActiv&& "isClicked"}`} onClick={()=>props.handelClick(name)}>
      {props.children}
    </li>
  )
}

export default memo(NavItem) 
