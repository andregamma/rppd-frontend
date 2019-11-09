import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

// import { Container } from './styles';

class Records extends Component {
    constructor(props) {
        super(props)
        this.state = {
            condition: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            condition: !this.state.condition
        });
    };
  render() {
    const { url } = this.props.match;
    return (
        <div className="Records">
            <section className="container mx-auto py-4 px-8 flex flex-row-reverse">
                <div className={`bg-gray-theme w-3/4 h-50 p-8 rounded-lg shadow-lg ${this.state.condition ? "" : "hidden"}`}>
                    <div className="flex justify-between">
                        <div className="text-xl text-white font-bold">John Ted Sampaio</div>
                        <div id="closeCard" className="text-md text-yellow-theme font-semibold cursor-pointer" onClick={this.handleClick}>Sair</div>
                    </div>
                    <div id="cardInfos" className={`container mx-auto py-8`}>
                        <div className="flex justify-between">
                            <ul>
                                <div className="text-yellow-theme font-semibold">Informações básicas</div>
                                <li><span className="text-white font-semibold">Idade:</span></li>
                                <li><span className="text-white font-semibold">Data de nascimento:</span></li>
                                <li><span className="text-white font-semibold">RG:</span></li>
            
                                <div className="text-yellow-theme font-semibold mt-4">Carteira de motorista</div>
                                <li><span className="text-white font-semibold">Em boa situação</span></li>
            
                                <div className="text-yellow-theme font-semibold mt-4">Condenações anteriores</div>
                                <li><span className="text-white font-semibold">Tráfico de drogas x2</span></li>
                            </ul>
                            <figure>
                                <img className="h-32 rounded-lg shadow-lg" src="https://i.imgur.com/QQDX16K.png" alt="" />
                            </figure>
                        </div>
                        <nav className="flex mt-4">
                            <Link to="records/create" className="text-gray-theme py-3 px-4 font-medium mr-3 bg-yellow-theme">Criar registro</Link>
                            <Link to="#" className="text-gray-theme py-3 px-4 font-medium mx-3 bg-yellow-theme">Adicionar crime</Link>
                            <Link to="#" className="text-gray-theme py-3 px-4 font-medium mx-3 bg-yellow-theme">Editar perfil</Link>
                        </nav>
                    </div>
                </div>
                <div id="cardSearch" className={`bg-gray-theme h-50 p-8 rounded-lg shadow-lg ${this.state.condition ? "hidden" : ""}`} >
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
                    <Link to={`${url}/1`}><div className="bg-yellow-theme h-8 w-64 text-gray-theme font-semibold mb-4 px-4 align-middle cursor-pointer" onClick={this.handleClick}>John Ted Sampaio</div></Link>
                    <Link to={`${url}/2`}><div className="bg-yellow-theme h-8 w-64 text-gray-theme font-semibold mb-4 px-4 align-middle cursor-pointer" onClick={this.handleClick}>Dimitri Emitri</div></Link>
                </div>
            </section>
        </div>
    );
  }
}
export default withRouter(Records)
