// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto p-6">
      {/* Stats section */}
      <div className="stats bg-blue-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-center font-semibold">Total Claims</p>
            <p className="text-center text-2xl">123</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-center font-semibold">Doctors</p>
            <p className="text-center text-2xl">56</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-center font-semibold">Insurers</p>
            <p className="text-center text-2xl">34</p>
          </div>
        </div>
      </div>

      {/* Jumbotron with buttons */}
      <div className="jumbotron bg-blue-500 text-white p-8 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to MedClaimML</h1>
        <p className="mb-6">Your one-stop solution for healthcare reimbursement.</p>
        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <button className="bg-white text-blue-500 px-6 py-2 rounded-lg shadow-md">
              Sign Up
            </button>
          </Link>
          <Link to="/signin">
            <button className="bg-white text-blue-500 px-6 py-2 rounded-lg shadow-md">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
