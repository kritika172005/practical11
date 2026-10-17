import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return <h2 className="text-2xl font-bold text-blue-600">Welcome to Home Page</h2>;
}

function About() {
  return <h2 className="text-2xl font-bold text-green-600">This is About Page</h2>;
}

function Contact() {
  return <h2 className="text-2xl font-bold text-purple-600">This is Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-center shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-blue-800">
            React Router Navigation
          </h1>

          <nav className="mb-8 flex justify-center gap-6">
            <Link className="text-blue-600 hover:underline" to="/">Home</Link>
            <Link className="text-blue-600 hover:underline" to="/about">About</Link>
            <Link className="text-blue-600 hover:underline" to="/contact">Contact</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;