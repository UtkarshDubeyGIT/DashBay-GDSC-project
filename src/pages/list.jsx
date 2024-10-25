import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
import Datatable from "../components/datatable"

const List = () => {
  return (
    <div className="list flex w-full">
      <Sidebar/>
      <div className="listContainer flex-grow-6">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List;