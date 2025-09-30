import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './SignUp.css';

export default function App() {
    const [rightPanelActive, setRightPanelActive] = useState(false);
    const [forgotPasswordActive, setForgotPasswordActive] = useState(false);

    useEffect(() => {
        const actionButtons = document.querySelectorAll('.action-button');
        actionButtons.forEach(button => {
            const rocketIcon = button.querySelector('.rocket-icon svg');
            button.addEventListener('click', () => {
                gsap.timeline()
                    .to(rocketIcon, {
                        duration: 0.6,
                        x: -8,
                        y: 8,
                        ease: "power2.out"
                    })
                    .to(rocketIcon, {
                        duration: 0.6,
                        x: '50vw',
                        y: '-50vh',
                        ease: "power2.in"
                    })
                    .set(rocketIcon, {
                        x: '-50vw',
                        y: '50vh'
                    })
                    .to(rocketIcon, {
                        duration: 0.5,
                        x: 0,
                        y: 0,
                        ease: "power2.out"
                    });
            });
        });
    }, []);

    const handleSignUpClick = () => {
        setRightPanelActive(true);
        setForgotPasswordActive(false);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
        setForgotPasswordActive(false);
    };

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        setForgotPasswordActive(true);
        setRightPanelActive(false);
    };

    const handleBackToSignInClick = (e) => {
        e.preventDefault();
        setForgotPasswordActive(false);
    };

    const containerClass = `container ${rightPanelActive ? 'right-panel-active' : ''} ${forgotPasswordActive ? 'forgot-password-active' : ''}`;

    return (
        <div className={containerClass} id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="https://www.facebook.com" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://accounts.google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="https://www.linkedin.com" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="action-button">
                        Sign Up
                        <span className="rocket-icon">
                            <svg viewBox="0 0 512.005 512.005">
                                <path
                                    d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
                            </svg>
                        </span>
                    </button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign In</h1>
                    <div className="social-container">
                        <a href="https://www.facebook.com" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://accounts.google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="https://www.linkedin.com" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#" id="forgotPassword" onClick={handleForgotPasswordClick}>Forgot your password?</a>
                    <button className="action-button">
                        Sign In
                        <span className="rocket-icon">
                            <svg viewBox="0 0 512.005 512.005">
                                <path
                                    d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
                            </svg>
                        </span>
                    </button>
                </form>
            </div>
            <div className="form-container forgot-password-container">
                <form action="#">
                    <h1>Recover Password</h1>
                    <span>Enter your email to receive a recovery link</span>
                    <input type="email" placeholder="Email" />
                    <button className="action-button">
                        Send
                        <span className="rocket-icon">
                            <svg viewBox="0 0 512.005 512.005">
                                <path
                                    d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
                            </svg>
                        </span>
                    </button>
                    <a href="#" id="backToSignIn" onClick={handleBackToSignInClick}>Back to Sign In</a>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
// SignUp.js (the original login/signup form, modified to default to sign-up panel)
// src/SignUp.jsx
// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';
// import './SignUp.css';
// import { useNavigate } from 'react-router-dom'; // For navigation after sign in/up

// export default function SignUp() {
//     const [rightPanelActive, setRightPanelActive] = useState(true); // Default to sign-up active
//     const [forgotPasswordActive, setForgotPasswordActive] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const actionButtons = document.querySelectorAll('.action-button');
//         actionButtons.forEach(button => {
//             button.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 const rocketIcon = button.querySelector('.rocket-icon svg');
//                 gsap.timeline()
//                     .to(rocketIcon, {
//                         duration: 0.6,
//                         x: -8,
//                         y: 8,
//                         ease: "power2.out"
//                     })
//                     .to(rocketIcon, {
//                         duration: 0.6,
//                         x: '50vw',
//                         y: '-50vh',
//                         ease: "power2.in"
//                     })
//                     .set(rocketIcon, {
//                         x: '-50vw',
//                         y: '50vh'
//                     })
//                     .to(rocketIcon, {
//                         duration: 0.5,
//                         x: 0,
//                         y: 0,
//                         ease: "power2.out",
//                         onComplete: () => {
//                             const buttonText = button.textContent.trim();
//                             if (buttonText === 'Sign In' || buttonText === 'Sign Up') {
//                                 navigate('/'); // Redirect to dashboard after sign in/up
//                             } else if (buttonText === 'Send') {
//                                 // Handle password recovery, perhaps redirect or show message
//                             }
//                         }
//                     });
//             });
//         });
//     }, [navigate]);

//     const handleSignUpClick = () => {
//         setRightPanelActive(true);
//         setForgotPasswordActive(false);
//     };

//     const handleSignInClick = () => {
//         setRightPanelActive(false);
//         setForgotPasswordActive(false);
//     };

//     const handleForgotPasswordClick = (e) => {
//         e.preventDefault();
//         setForgotPasswordActive(true);
//         setRightPanelActive(false);
//     };

//     const handleBackToSignInClick = (e) => {
//         e.preventDefault();
//         setForgotPasswordActive(false);
//     };

//     const containerClass = `container ${rightPanelActive ? 'right-panel-active' : ''} ${forgotPasswordActive ? 'forgot-password-active' : ''}`;

//     return (
//         <div className={containerClass} id="container">
//             <div className="form-container sign-up-container">
//                 <form action="#">
//                     <h1>Create Account</h1>
//                     <div className="social-container">
//                         <a href="https://www.facebook.com" className="social"><i className="fab fa-facebook-f"></i></a>
//                         <a href="https://accounts.google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
//                         <a href="https://www.linkedin.com" className="social"><i className="fab fa-linkedin-in"></i></a>
//                     </div>
//                     <span>or use your email for registration</span>
//                     <input type="text" placeholder="Name" />
//                     <input type="email" placeholder="Email" />
//                     <input type="password" placeholder="Password" />
//                     <button className="action-button">
//                         Sign Up
//                         <span className="rocket-icon">
//                             <svg viewBox="0 0 512.005 512.005">
//                                 <path
//                                     d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
//                             </svg>
//                         </span>
//                     </button>
//                 </form>
//             </div>
//             <div className="form-container sign-in-container">
//                 <form action="#">
//                     <h1>Sign In</h1>
//                     <div className="social-container">
//                         <a href="https://www.facebook.com" className="social"><i className="fab fa-facebook-f"></i></a>
//                         <a href="https://accounts.google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
//                         <a href="https://www.linkedin.com" className="social"><i className="fab fa-linkedin-in"></i></a>
//                     </div>
//                     <span>or use your account</span>
//                     <input type="email" placeholder="Email" />
//                     <input type="password" placeholder="Password" />
//                     <a href="#" id="forgotPassword" onClick={handleForgotPasswordClick}>Forgot your password?</a>
//                     <button className="action-button">
//                         Sign In
//                         <span className="rocket-icon">
//                             <svg viewBox="0 0 512.005 512.005">
//                                 <path
//                                     d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
//                             </svg>
//                         </span>
//                     </button>
//                 </form>
//             </div>
//             <div className="form-container forgot-password-container">
//                 <form action="#">
//                     <h1>Recover Password</h1>
//                     <span>Enter your email to receive a recovery link</span>
//                     <input type="email" placeholder="Email" />
//                     <button className="action-button">
//                         Send
//                         <span className="rocket-icon">
//                             <svg viewBox="0 0 512.005 512.005">
//                                 <path
//                                     d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
//                             </svg>
//                         </span>
//                     </button>
//                     <a href="#" id="backToSignIn" onClick={handleBackToSignInClick}>Back to Sign In</a>
//                 </form>
//             </div>
//             <div className="overlay-container">
//                 <div className="overlay">
//                     <div className="overlay-panel overlay-left">
//                         <h1>Welcome Back!</h1>
//                         <p>To keep connected with us please login with your personal info</p>
//                         <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
//                     </div>
//                     <div className="overlay-panel overlay-right">
//                         <h1>Hello, Friend!</h1>
//                         <p>Enter your personal details and start your journey with us</p>
//                         <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }