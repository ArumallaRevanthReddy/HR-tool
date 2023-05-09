import { useRef, useState } from 'react'
import './login.css';
import { ValidateEmail, validatePassword } from '../../utils/FormValidation';
import { credentials } from '../../utils/data';
import { useNavigate } from 'react-router';

export function Login() {
    const navigate = useNavigate();
    const enteredUsername = useRef();
    const enteredPassword = useRef();
    const [isValidCredentials, setIsValidCredentials] = useState(true);
    const [isValidUsername, setIsValidUsername] = useState(true);
    const loginHandler = (event) => {
        event.preventDefault();
        setIsValidUsername(ValidateEmail(enteredUsername.current.value));
        if (ValidateEmail(enteredUsername.current.value) && validatePassword(enteredPassword.current.value)) {
            let isAvailable = credentials.find( item => {
                if(item.username === enteredUsername.current.value && item.password === enteredPassword.current.value){
                    return item
                }
            })
            if(isAvailable){
                console.log("use logged in succesfully");
                setIsValidCredentials(true);
                navigate('/dashboard')
            } else{
                console.log("invalid credentials");
                setIsValidCredentials(false);
            }
        }
    }

    return (
        <div className="wrapper">
            <div className="leftContainer"></div>
            <div className='border'></div>
            <div className="rightContainer">
                <div className="cloudsideLogo"></div>
                <div className="text-bold">Welcome Back</div>
                <div className="text">Login by entering the information below</div>
                <div>
                    <form onSubmit={loginHandler}>
                        <div className='username'>
                            <input type="text" id="title" required placeholder="User Name" className="username-logo" ref={enteredUsername} /><br />
                            {!isValidUsername && <p className='textRed'>*Enter valid username</p>}
                        </div>
                        <div className='password'>
                            <input type="password" id="password" required placeholder="Password" className="password-lock" ref={enteredPassword} /><br />
                            {!isValidCredentials && <p className='textRed'>*Enter valid credentials</p>}
                        </div>
                        <p className="float-right"><a>forgot password?</a></p><br />
                        <button className={isValidCredentials ? "disabled" : null}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}