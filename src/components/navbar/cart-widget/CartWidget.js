import "./CartWidget.scss";

const NavButton = (props) => {
  return (
    <li className="vlp-navbar-list-item">
      <a href="/#" className={props.data.class}>
        <i class={props.data.iconClass}></i>
        {props.data.label}
      </a>
    </li>
  );
};

export default NavButton;
