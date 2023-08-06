import React from 'react'
import SideNavbar from './SideNavbar'

export default function AdminHome() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-12">
                    <SideNavbar/>
                </div>
                <div className="col-md-9 col-12">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/img/user.jpg" width="100%" height="500px" alt="" />
                        </div>
                        <div className="col-md-6">
                            <h5 className='text-center bg-primary p-2'>Admin Profile</h5>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>Nitin Chauhan</td>
                                    </tr>
                                    <tr>
                                        <th>USer Name</th>
                                        <td>nitin</td>
                                    </tr>
                                    <tr>
                                        <th>Role</th>
                                        <td>Admin</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>vishankchauhan@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>9873848046</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
