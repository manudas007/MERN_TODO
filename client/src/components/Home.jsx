import "./Home.css";
export default function Home() {
    return (

        <div className="auth-container">
            <h1>Welcome to TODO!</h1>
            <div className="buttons">
                <a href="/signin" className="signin-btn">Sign In</a>
                <a href="/signup" className="signup-btn">Sign Up</a>
            </div>
        </div>

    );
}