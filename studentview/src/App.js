import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Signin from './Pages/Signin/inde';
import Upload from './Pages/Upload/Upload';
import Navbar from './component/Navbar/Navbar';
import JobCard from './component/JobCard';

function App() {
  
  return (
    <div className='App'>
      {/* <Login />  */}
      {/* <Signin /> */}
      {/* <Upload/> */}
      <Navbar />
      <JobCard/>
    </div>
  );
}

export default App;
