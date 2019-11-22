import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

// import { Container } from './styles';

class Records extends Component {
  render() {
    const { url } = this.props.match;
    return (
            <section id="Records" className="container mx-auto py-4 px-8 flex flex-row-reverse">
                <div id="cardSearch" className='bg-gray-theme h-50 p-8 rounded-lg shadow-lg'>
                    <div className="text-xl text-white font-bold">Bem-vindo aos registros! Realize a sua busca pelo nome do civil.</div>
                    <div className="container mx-auto py-8">
                        <input className="w-full h-12 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" type="search" placeholder="Faça sua busca..." />
                        <nav className="flex">
                            <Link to="#" className="no-underline text-gray-theme py-3 px-4 font-medium mr-3 bg-yellow-theme">Prisões</Link>
                            <Link to="#" className="no-underline text-gray-theme py-3 px-4 font-medium mx-3 bg-yellow-theme">Boletins de ocorrência</Link>
                        </nav>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="text-xl text-gray-theme font-bold mb-4">Mostrando (2) resultados para "John Ted"...</div>
                    <hr className="my-4" />
                    <Link to='/civilian/1'><div className="bg-yellow-theme h-8 w-64 text-gray-theme font-semibold mb-4 px-4 align-middle cursor-pointer">Felipe Orochi</div></Link>
                    <Link to='/civilian/2'><div className="bg-yellow-theme h-8 w-64 text-gray-theme font-semibold mb-4 px-4 align-middle cursor-pointer">Dimitri Emitri</div></Link>
                </div>
            </section>
    );
  }
}
export default withRouter(Records)
