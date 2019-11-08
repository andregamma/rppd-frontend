import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
    <div className="Login">
      <section className="container mx-auto py-4 px-8">
        <div className="border border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-4 flex flex-col justify-between leading-normal">
          <div className="text-gray-theme font-bold text-xl mb-8 text-center">Olá! Efetue seu login abaixo.</div>
          <form className="w-full max-w-sm mx-auto">
            <div className="md:flex md:flex-row md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-theme font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Nome de usuário
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-theme" id="inline-username" type="text" placeholder="Jhon Wick" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-theme font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                  Senha
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-theme" id="inline-password" type="password" placeholder="******************" />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <Link to="/home">
                  <button className="shadow bg-yellow-theme hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Entrar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
    );
  }
}
