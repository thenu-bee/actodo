function Header(props)
{
    

return(
    <div>
       <h1 className="text-3xl font-medium">Hello {props.username.user}</h1>
       <p>I help you  manage your activites :)</p>
    </div>
)
}


export default Header