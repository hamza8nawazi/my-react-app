import './Home.css'
const Home = () => {
    return (
<nav class="navbar">
      <div className="navbar-left">
        <a href="#home">Dropbox</a>
      </div>
      <div className="navbar-center">
        <ul>
          <li><a href="#why-dropbox">Why Dropbox?</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="#contact">Contact</a>
        <a href="#signup">Sign up</a>
        <a href="#signin">Sign in</a>
        <a href="#get-started" className="btn-get-started">Get started</a>
      </div>
    </nav>
  );
    
  }
  
  export default Home;