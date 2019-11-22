import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";

export default class Card extends Component {
  render() {
    return (
        <div className="md:flex">
            <div className="md:flex-shrink-0">
                <img className="rounded-lg md:w-32" src={this.props.img} alt="Jhon Wick" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <div className="flex flex-row items-center uppercase tracking-wide text-sm text-yellow-theme font-bold">
                    <FaAddressCard />
                    <span className="ml-2">{this.props.passport}</span>
                </div>
                <Link to="/profile/1" className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
                    {this.props.name}
                </Link>
                <p className="mt-2 text-gray-600">Texto descritivo</p>

                <div className="flex mt-4 justify-between">
                    <Link to="reports/1" class="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white">
                        Mais detalhes
                    </Link>
                    {/**<Link to="#" class="inline-block px-3 py-2 mx-4 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white">
                            Baixar PDF
                        </Link> */}
                </div>
            </div>
        </div>
    );
  }
}
