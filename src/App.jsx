import React from 'react'

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: '#333',
          color: 'white',
          padding: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>My Website</h2>
        <div>
          <a
            href="#"
            style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}
          >
            Home
          </a>
          <a
            href="#"
            style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}
          >
            About
          </a>
          <a
            href="#"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '80px 20px',
        }}
      >
        <h1>Welcome to My React Website</h1>
        <p>Learn React • AWS • DevOps</p>

        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginTop: '20px',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </section>

      {/* Cards Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          padding: '20px',
        }}
      >
        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <h3>React</h3>
          <p>Build modern web applications.</p>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <h3>AWS</h3>
          <p>Deploy applications in the cloud.</p>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <h3>DevOps</h3>
          <p>Automate development and deployment.</p>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center',
          padding: '15px',
          marginTop: '40px',
        }}
      >
        <p>© 2026 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App