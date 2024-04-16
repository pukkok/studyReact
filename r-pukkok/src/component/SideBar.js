import '../Style/SideBar.css'

function SideBar({ open, children }){
    return(
        <div className={`sidebar ${open && 'open'}`}>
            <div className='sidebar-menus'>{children}</div>
        </div>
    )
}
export default SideBar