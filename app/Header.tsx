'use client'
import React, { useState } from "react";

const Header : React.FC<any> = (props) => {

    

    return (
        <div className="navbar bg-base-100 md:px-16 py-4 shadow-[0px_6px_6px_0px_rgba(17,_12,_46,_0.15)]">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li>
                <a>Homepage</a>
                </li>
                <li>
                <a>Portfolio</a>
                </li>
                <li>
                <a>About</a>
                </li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Workers Review</a>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            </button>
            <button onClick={props.handleOpen}  className="btn px-4 py-2 bg-primary text-white rounded-md">
                Add Worker
            </button>
        </div>
        </div>
    );
};

export default Header;
