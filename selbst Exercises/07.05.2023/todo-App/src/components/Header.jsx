const Header = (props) => {
  return (
    <header>
      <h1>todo</h1>
      <p>Items werden in localStorage gespeichert</p>
      <p>{props.deneme}</p>
    </header>
  )

}

export default Header;