import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#3498db',
                    borderRadius: '8px'
                }}>Create Blog +</a>
            </div>
        </nav>
    );
} 
 
export default Navbar;