import React from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { useParams } from 'react-router-dom'

export default function SingleReport() {
    const { id } = useParams();
    return (
        <section id="SingleReport" className="container mx-auto py-4 px-8">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="border-r border-b border-l border-t border-gray-400 lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
                    <div className="md:flex md:justify-between">
                        <div className="flex flex-col">
                            <p className="text-gray-theme text-xl font-semibold">SECRETARIA DE SEGURANÇA PÚBLICA DA CIDADE DE RIBEIRÃO PIRES</p>
                            <p className="text-gray-theme text-xl font-semibold">DEPARTAMENTO DE POLÍCIA DE LOS SANTOS</p>
                            <p className="text-gray-theme text-xl font-semibold">BOLETIM DE OCORRÊNCIA</p>
                            <p className="text-gray-theme text-xl font-semibold">Nº{id}</p>
                        </div>
                        <div className="flex justify-end">
                            <img src="https://i.imgur.com/P9Sn8ma.png" className="h-32" alt=""/>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Informações básicas</div>
                        <div className="text-gray-700 text-base">
                            <ul>
                                <li><span className="font-semibold">Vítima:</span> Colin Mandrak</li>
                                <li><span className="font-semibold">Passaporte:</span> 973</li>
                                <li><span className="font-semibold">Local da ocorrência:</span> Garagem Central, Delegacia</li>
                                <li><span className="font-semibold">Testemunhas:</span> N/A</li>
                            </ul>
                        </div>
                        <hr className="my-4" />
                        <div className="text-gray-900 font-bold text-xl mb-2">Relato da vítima</div>
                        <p className="text-gray-700 text-base">Colin estava dirigindo para a garagem quando viu alguém em um carro roxo e preto de vidro escuro soltando um saco marrom no chão, Colin foi verificar e viu que dentro da sacola e tinha muito dinheiro mas estava pintado de azul, preocupado que o dono do dinheiro estivesse precisado dele, Colin veio até a delegacia onde o dinheiro foi entregue para o oficial Jhon Wick.
                        </p>
                        <hr className="my-4" />
                        <div className="text-gray-900 font-bold text-xl mb-2">Informações do suspeito</div>
                        <div className="text-gray-700 text-base">
                            <ul>
                                <li><span className="font-semibold">Gênero:</span> N/A</li>
                                <li><span className="font-semibold">Características:</span> N/A</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="text-gray-900 font-bold text-lg mb-4">Bens envolvidos</div>
                    <div className="flex items-center mb-4">
                        <IconContext.Provider value={{ size: '2em' }}>
                            <FaMoneyBillAlt />
                        </IconContext.Provider>
                        <div className="ml-2 text-sm">
                            <p className="text-gray-900 leading-none">Dinheiro sujo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
