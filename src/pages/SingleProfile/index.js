import React, { Component } from 'react';
import { GiStarsStack, GiPistolGun, GiAmmoBox, GiWoodStick } from 'react-icons/gi'
import { MdFlashOn } from 'react-icons/md'
import { IconContext } from 'react-icons';

export default class SingleProfile extends Component {
  render() {
    return (
        <div className="SingleProfile">
            <div className="text-xl my-4 font-bold text-center uppercase text-gray-theme">Você está visualizando o perfil de Jhon Wick</div>
            <section className="container mx-auto py-4 px-8">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-blue-500 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url(https://image.prntscr.com/image/KOawqlR4RxK82kcv2sWzUQ.png)'}} title="Woman holding a mug">
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="flex flex-row items-center text-sm text-gray-600 flex items-center">
                                <GiStarsStack />
                                <span className="ml-2">Comissário</span>
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">Jhon Wick</div>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>
                        <hr className="mb-4" />
                        <div className="text-gray-900 font-bold text-lg mb-4">Armamentos fornecidos</div>
                        <div className="flex items-center mb-4">
                            <IconContext.Provider value={{ size: '2em' }}>
                                <GiPistolGun />
                            </IconContext.Provider>
                            <div className="ml-2 text-sm">
                                <p className="text-gray-900 leading-none">Glock</p>
                                <p className="text-gray-600">18 de agosto de 2019</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <IconContext.Provider value={{ size: '2em' }}>
                                <GiAmmoBox />
                            </IconContext.Provider>
                            <div className="ml-2 text-sm">
                                <p className="text-gray-900 leading-none">9mm (35x)</p>
                                <p className="text-gray-600">18 de agosto de 2019</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <IconContext.Provider value={{ size: '2em' }}>
                                <MdFlashOn />
                            </IconContext.Provider>
                            <div className="ml-2 text-sm">
                                <p className="text-gray-900 leading-none">Tazer</p>
                                <p className="text-gray-600">18 de agosto de 2019</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <IconContext.Provider value={{ size: '2em' }}>
                                <GiWoodStick />
                            </IconContext.Provider>
                            <div className="ml-2 text-sm">
                                <p className="text-gray-900 leading-none">Cacetete</p>
                                <p className="text-gray-600">18 de agosto de 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}
