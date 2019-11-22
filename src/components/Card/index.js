import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { GiPoliceBadge } from "react-icons/gi";

export default class Card extends Component {
  render() {
    return (
        <>  
            <div className="flex mx-4 my-4 border rounded-l-lg border-gray-300 w-1/4">
                <Link to="/profile/1">
                    <img className="rounded-lg rounded-r-none md:w-32" src={this.props.img} alt="Jhon Wick" />
                </Link>
                <div className="mt-4 ml-6">
                    <div className="flex flex-row items-center uppercase tracking-wide text-sm text-yellow-theme font-bold">
                        { this.props.type === "cops" ? (
                            <GiPoliceBadge />
                        ) : (
                            <FaAddressCard />
                        )}
                        <span className="ml-2">{this.props.passport}</span>
                    </div>
                    <Link to="/profile/1" className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
                        {this.props.name}
                    </Link>

                    { this.props.type === "report" ? (
                        <div className="flex mt-4 justify-between">
                            <Link to="reports/1" class="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white">
                                Visualizar
                            </Link>
                            {/**<Link to="#" class="inline-block px-3 py-2 mx-4 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white">
                                    Baixar PDF
                                </Link> */}
                        </div>
                    ) : (
                        null
                    )}
                </div>
            </div>  
        </>
    );
  }
}
