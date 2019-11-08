import React, { Component } from 'react';
import { GiPoliceBadge } from "react-icons/gi";
import { Link, withRouter } from "react-router-dom";

// import { Container } from './styles';

class Profile extends Component {
  render() {
    const { url } = this.props.match;
    return (
        <div className="Profile">
            <div className="text-xl my-4 font-bold text-center uppercase text-gray-theme">Oficiais cadastrados</div>
            <section className="container mx-auto py-4 px-8">
                <div className="md:flex md:justify-between">
                    <div className="md:flex-shrink-0">
                        <img className="rounded-lg md:w-32" src="https://image.prntscr.com/image/KOawqlR4RxK82kcv2sWzUQ.png" alt="Jhon Wick" />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <div className="flex flex-row items-center uppercase tracking-wide text-sm text-yellow-theme font-bold"><GiPoliceBadge /><span className="ml-2">201</span></div>
                        <Link to={`${url}/1`} className="block mt-1 text-lg leading-tight font-semibold text-gray-900">Jhon Wick</Link>
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="md:flex-shrink-0">
                        <img className="rounded-lg md:w-32" src="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" alt="Ivan Palace" />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="flex flex-row items-center uppercase tracking-wide text-sm text-yellow-theme font-bold"><GiPoliceBadge /><span className="ml-2">202</span></div>
                        <Link to={`${url}/1`} className="block mt-1 text-lg leading-tight font-semibold text-gray-900">Ivan Palace</Link>
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}
export default withRouter(Profile)
