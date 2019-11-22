import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { GiArrest, GiCigarette } from 'react-icons/gi'
import { FaAddressCard } from 'react-icons/fa'
import { IconContext } from 'react-icons';

export default class SingleCivilian extends Component {
  render() {
    return (
        <section id="SingleCivilian" className="container mx-auto py-4 px-8">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-blue-500 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/606570859129471006/643423360080019456/20191111_091237.jpg)'}} title="Woman holding a mug">
                </div>
                <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="flex flex-row items-center text-sm text-gray-600 flex items-center">
                            <FaAddressCard />
                            <span className="ml-2">543</span>
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">Felipe Orochi</div>
                        <p className="text-gray-700 text-base">
                            <ul>
                                <li><span class="font-semibold">Idade:</span> 23</li>
                                <li><span class="font-semibold">Data de Nascimento:</span> 00/00/0000</li>
                                <li><span class="font-semibold">Telefone:</span> 3232</li>
                                <li><span class="font-semibold">Gênero:</span> Masculino</li>
                            </ul>
                        </p>
                    </div>
                    <hr className="mb-4" />
                    <div className="text-gray-900 font-bold text-lg mb-4">Condenações anteriores</div>
                    <div className="flex items-center mb-4">
                        <IconContext.Provider value={{ size: '2em' }}>
                            <GiCigarette />
                        </IconContext.Provider>
                        <div className="ml-2 text-sm">
                            <p className="text-gray-900 leading-none">Tráfico de Drogas (x2)</p>
                            <p className="text-gray-600">Pela ultima vez em 18 de agosto de 2019</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <IconContext.Provider value={{ size: '2em' }}>
                            <GiArrest />
                        </IconContext.Provider>
                        <div className="ml-2 text-sm">
                            <p className="text-gray-900 leading-none">Roubo</p>
                            <p className="text-gray-600">Pela última vez em 18 de agosto de 2019</p>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex justify-center">
                        <Link to="/create" className="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white m-2">
                            Novo registro
                        </Link>
                        <Link to="#" className="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white m-2">
                            Criar mandado
                        </Link>
                        <Link to="#" className="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white m-2">
                            Editar perfil
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
