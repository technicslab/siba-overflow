import AdminDashBoardNav from './AdminDashBoardNav'
import Footer from './Footer'
import AdminToDoListDiv from './AdminToDoListDiv'
export default function AdminDashboard(){

    return(
        <div>
            <AdminDashBoardNav />
            <AdminToDoListDiv />
            <Footer />
        </div>
    )
}