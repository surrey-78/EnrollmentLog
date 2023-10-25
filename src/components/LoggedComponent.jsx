import { useState } from "react"

const LoggedComponent = () => {
    const [subject1, setSubject1] = useState('');
    const [subject2, setSubject2] = useState('');
    const [subject3, setSubject3] = useState('');

    return (
        <div>
            <p>This the the logged page</p>
        </div>
    )

}