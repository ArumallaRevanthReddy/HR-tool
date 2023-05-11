import { useRef, useState } from 'react'
import classes from './Login.module.css';
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
        <div className={classes.wrapper}>
            <div className={classes.leftContainer}></div>
            <div className={classes.border}></div>
            <div className={classes.rightContainer}>
                <div className={classes.cloudsideLogo}></div>
                <div className={classes.textBold}>Welcome Back</div>
                <div className={classes.text}>Login by entering the information below</div>
                <div>
                    <form onSubmit={loginHandler}>
                        <div className={classes.username}>
                            <input type="text" id="title" required placeholder="User Name" className={`${classes.usernameLogo} ${classes.input}`} ref={enteredUsername} /><br />
                            {!isValidUsername && <p className={classes.textRed}>*Enter valid username</p>}
                        </div>
                        <div className='password'>
                            <input type="password" id="password" required placeholder="Password" className={`${classes.passwordLock} ${classes.input}`} ref={enteredPassword} /><br />
                            {!isValidCredentials && <p className={classes.textRed}>*Enter valid credentials</p>}
                        </div>
                        <p className="float-right"><a>forgot password?</a></p><br />
                        <button className={!isValidCredentials ? `${classes.btn} ${classes.disabled}` : classes.btn}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}