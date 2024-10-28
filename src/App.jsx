import  Header  from './components/Header/index.jsx'
import  Footer  from './components/Footer/index.jsx'
import { Outlet } from 'react-router-dom';

export default function App() {
    return (
      <>
       <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
      </>
    );
  }