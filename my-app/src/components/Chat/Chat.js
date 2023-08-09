import { useState } from "react"

export default function Chat({ }) {
    const [message, setMessage] = useState('')
    const [user, setUser] = useState('')
    function messageHandle(ev) {
        setMessage(ev.target.value)
    }
    function changeUser(ev) {
        setUser(ev.target.options[ev.target.selectedIndex].text)
    }
    function sendMessage(ev) {
        ev.preventDefault()
        console.log(user, " , ", message)
    }
    return (
        <div className="col-md-4 shadow">
            <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Message</label>
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={messageHandle} id="inlineFormInputGroupUsername" placeholder="Message..." />
                    </div>
                </div>

                <div className="col-12 mt-2">
                    <label className="visually-hidden mr-3" htmlFor="inlineFormSelectPref">User</label>
                    <select className="form-select" onChange={changeUser} id="inlineFormSelectPref">
                        <option defaultValue>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="col-12 mt-2">
                    <button type="button" onClick={sendMessage} className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    )
}