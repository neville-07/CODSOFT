import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob';
import JobDetail from './pages/JobDetail';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';




function App() {
  return (
    <Router>
      <div className="App">
        {/* Header with logo */}
        <header className="header">
          <div className="logo-title">
            <img src="/logo.png" alt="JobHunt Logo" className="logo-img" />
            <h1>JobHunt</h1>
          </div>
          <p>Find your dream job today</p>
        </header>

        {/* Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Browse Job</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><Link to="/post-job" className="post-job-link">Post a Job</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section
                  className="hero-section"
                  style={{
                    backgroundImage: 'url("/jb.PNG")',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    padding: '60px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    borderRadius: '0 0 10px 10px',
                    color: 'white',
                  }}
                >
                  <div className="hero-content">
                    <h1>4536+ Jobs Listed</h1>
                    <h2>
                      Find your <span className="highlight">Dream Job</span>
                    </h2>
                    <p>We help you connect with the best companies hiring today.</p>
                    <button className="upload-btn">Upload Your Resume</button>
                  </div>
                </section>

                <section className="search-section">
                  <input type="text" placeholder="Search keyword" />
                  <input type="text" placeholder="Location" />
                  <input type="text" placeholder="Category" />
                  <button className="find-job-btn">Find Job</button>
                </section>
              </>
            }
          />

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />

<Route path="/tasks" element={<Tasks />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
