import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";

class Header extends Component {
  render() {

    return (
    <header className="bg-gray-theme">
        <div className="py-4 px-2 lg:mx-4 xl:mx-12 ">
            <nav className="flex items-center justify-between flex-wrap  ">
                <div className="flex items-center flex-no-shrink text-white mr-6 ">
                    <img src="https://i.imgur.com/P9Sn8ma.png" alt="" className="h-12 xl:h-32  mr-2  " />
                    { /** aaa  <span className="text-gray-700 mt-2 hover:text-indigo-400 font-black">
                            Yamsol llc
                    </span> */}
                </div>
                <div className="block lg:hidden">
                    <button
                        className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div id="main-nav" className="w-full flex-grow lg:flex items-center lg:w-auto hidden  ">
                    <div className="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                        <NavLink 
                            to="/home" 
                            className="block lg:inline-block text-md text-gray-900 font-bold sm:hover:border-indigo-400  hover:text-yellow-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg" 
                            activeClassName="text-yellow-500"
                        >
                            INÍCIO
                        </NavLink>
                        <NavLink 
                            to='/records'
                            className="block lg:inline-block text-md text-gray-900  font-bold sm:hover:border-indigo-400  hover:text-yellow-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg" 
                            activeClassName="text-yellow-500"
                        >
                            REGISTROS
                        </NavLink>
                        <NavLink 
                            to='/reports'
                            className="block lg:inline-block text-md text-gray-900  font-bold sm:hover:border-indigo-400  hover:text-yellow-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg" 
                            activeClassName="text-yellow-500"
                        >
                            BOLETINS DE OCORRÊNCIA
                        </NavLink>
                        <NavLink 
                            to='/profile'
                            className="block lg:inline-block text-md text-gray-900  font-bold sm:hover:border-indigo-400  hover:text-yellow-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg" 
                            activeClassName="text-yellow-500"
                        >
                            OFICIAIS CADASTRADOS
                        </NavLink>
                        <NavLink 
                            to='/calculator'
                            className="block lg:inline-block text-md text-gray-900  font-bold sm:hover:border-indigo-400  hover:text-yellow-500 mx-2 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg" 
                            activeClassName="text-yellow-500"
                        >
                            CALCULADORA
                        </NavLink>
                    </div>
                    <div className="text-2xl my-1 mx-3">
                        <img src="img/shopping.png" className="h-6" alt="" />
                    </div>
                </div>
            </nav>
        </div>
    </header>
    )
  }
}

export default withRouter(Header)
