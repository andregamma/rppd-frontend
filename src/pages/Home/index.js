import React, { Component } from 'react';

// import { Container } from './styles';

export default class HomePage extends Component {
    render() {
        return (
            <section id="home-page" className="container mx-auto py-4 px-8">
                <div className="text-xl">Olá, Oficial Ted</div>
                <p className="text-normal font-light">Você tem um total de <span className="font-bold">4</span> registros anexados ao seu nome.</p>
                <hr className="mt-4" />
                <div className="py-8">
                    <div className="text-xl">Quadro de avisos</div>
                    <p>0 avisos</p>
                </div>
            </section>
            );
        }
    }
    