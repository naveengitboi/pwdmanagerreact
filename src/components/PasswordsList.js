import React, { useState } from 'react'

function PasswordsList(props) {
    const { pwdList, deleteFunction, setSearchInput, onSearchFun } = props;

    const [showPwd, setShowPwd] = useState(false)

    const searchInputText = (e) => {
        setSearchInput(e.target.value)
        onSearchFun();
    }

    return (
        <div className='pwdListContainer'>
            <div className="listHeader">
                <h1>Your Passwords <span className='count'> {pwdList.length == 0 ? '0' : `${pwdList.length}`} </span> </h1>
                <div className="showPwds">
                    <input type="checkbox" id='showPwds' onClick={() => setShowPwd(prev => !prev)} />
                    <label htmlFor="showPwds">Show Passwords</label>
                </div>
                <div className="searchBox">
                    <div className="searchBoxImg">
                        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="search" />
                    </div>
                    <input type="search" placeholder='Search' onChange={searchInputText} />
                </div>
            </div>
            <div className="pwdLists">
                {
                    pwdList.length == 0 ? (
                        <div className="noPasswords">
                            <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt='no passwords' className='noPwdImg' />
                            <p>No Passwords</p>
                        </div>
                    ) : (
                        pwdList.map((pwd, index) => {
                            return (
                                <li key={index}>
                                    <div className="profileImg">
                                        {pwd.user[0]}
                                    </div>
                                    <div className="profileDetails">
                                        <p>{pwd.website}</p>
                                        <p>{pwd.user}</p>
                                        <p> {showPwd ? `${pwd.password}` : (
                                            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" alt="stars" />
                                        )} </p>
                                    </div>
                                    <div className="delBtn">
                                        <button onClick={() => deleteFunction(pwd.id)}><img src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" alt="delete" /></button>
                                    </div>
                                </li>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default PasswordsList

