import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function Header() {
  const nav=useNavigate()

  const logout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }
  return (
<>
<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHX6I512gcFArlxwiw0Z7L9ilOTlRk9aQQA&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Video Player
          </Navbar.Brand>
        </Container>
        <button className='btn btn-success text-white' onClick={logout}>Logout</button>
      </Navbar>
</>  )
}

export default Header