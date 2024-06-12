

import { useState } from "react";

export function Classbinding() {
    const [theme, setTheme] = useState()
    const [btn, setbtn] = useState()
    function formchange(e) {
        if (e.target.checked) {
            setTheme('bg-dark text-white')
            setbtn('bg-white text-dark')

        }
        else {
            setTheme('')
            setbtn('')
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form className={`border border-1 rounded rounded-3 p-3 ${theme}`}>
                <h1 className="bi bi-person-fill">User Login</h1>
                <div className="form-switch">
                    <input type="checkbox" onChange={formchange} className="form-check-input" /><label>Dark Mode</label>
                </div>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                </dl>
                <button className={`btn btn-dark w-100 ${btn}`}>Login</button>

            </form>


        </div>
    )
}