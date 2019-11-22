import React, { Component } from 'react';
import Select from 'react-select'

// import { Container } from './styles';

export default class Create extends Component {
  render() {
    const type = [
        { value: 'arrestreport', label: 'Relatório de Prisão' },
        { value: 'policereport', label: 'Boletim de Ocorrência' },
        { value: 'traffic ticket', label: 'Multa de Trânsito' }
    ]
    const suspect = [
        { value: '1', label: 'John Wick'}
    ]
    return (
        <section id="Create" className="container mx-auto py-4 px-8">
            <div className="w-full border border-gray-400 rounded p-4">
                <label className="text-gray-theme font-semibold mb-2">Selecione o tipo de registro</label>
                <Select options={type} />
                <hr className="mb-4"/>
                <h1 className="text-gray-theme font-semibold text-xl">Informações do suspeito</h1>
                <Select options={suspect} />
                <hr className="mb-4"/>
                <textarea name="" id="" cols="30" rows="10" className="css-yk16xz-control"></textarea>
            </div>
        </section>
    );
  }
}
