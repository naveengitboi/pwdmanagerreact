import React, { useState } from 'react'
import PasswordsList from './PasswordsList'
import { v4 as uuidv4 } from 'uuid'

function AddPassword() {
    const [pwdList, setPwdList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [userDetails, setUserDetails] = useState({
        website: '',
        user: '',
        password: ''
    })

    const [filterSearch, setFilterSearch] = useState(pwdList)
    const formHandler = (e) => {
        e.preventDefault()
        const newUserDetails = {
            id: uuidv4(),
            ...userDetails
        }
        setPwdList(prev => ([...prev, newUserDetails]))

    }

    const onDeleteOperation = (id) => {
        const filteredList = pwdList.filter((user) => {
            if (user.id != id) {
                return user
            }
        })
        setPwdList(filteredList);
    }
    const onSearchFunction = () => {
        const searchedData = pwdList.filter((user) => {
            if (user.website.includes(searchInput)) {
                return user;
            }
        })

    }
    const searchedData = pwdList.filter((user) => {
        return user.website.toLowerCase().includes(searchInput.toLowerCase());
    })

    return (
        <div className='addpwdContainer'>
            <div className="pwdContent">
                <form onSubmit={formHandler} className="addpwdForm">
                    <h1>Add New Password</h1>
                    <div className="inputBox">
                        <div className="inputImgBox">
                            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website" />
                        </div>
                        <input type="text" placeholder='Enter Website' onChange={(e) => setUserDetails((prev) => ({ ...prev, website: e.target.value }))} />
                    </div>
                    <div className="inputBox">
                        <div className='inputImgBox'>
                            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt="username" />
                        </div>
                        <input type="text" placeholder='Enter Username' onChange={(e) => setUserDetails((prev) => ({ ...prev, user: e.target.value }))} />
                    </div>
                    <div className="inputBox">
                        <div className="inputImgBox">
                            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt="password" />
                        </div>
                        <input type="password" placeholder='Enter Password' onChange={(e) => setUserDetails((prev) => ({ ...prev, password: e.target.value }))} />
                    </div>
                    <div className="addBtn">
                        {/* <button onClick={formHandler}>Add</button> */}
                        <input type="submit" value={'Add'} />
                    </div>
                </form>
                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" alt="password manager" />
            </div>
            <PasswordsList pwdList={searchedData} setSearchInput={setSearchInput} deleteFunction={onDeleteOperation} onSearchFun={onSearchFunction} />
        </div>
    )
}

export default AddPassword