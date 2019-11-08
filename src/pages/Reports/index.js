import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';

// import { Container } from './styles';
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      height: '80%',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    textHeader: {
        fontSize: 11,
    }
});
const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.textHeader}>SECRETARIA DE SEGURANÇA PÚBLICA DA CIDADE DE RIBEIRÃO PIRES </Text>
          <Text style={styles.textHeader}>DEPARTAMENTO DE POLÍCIA DE LOS SANTOS </Text>
        </View>
        <View style={styles.section}>
          <Image src="https://i.imgur.com/P9Sn8ma.png">

          </Image>
        </View>
      </Page>
    </Document>
);
export default class Reports extends Component {
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
    return (
        <div className="Reports">
            <section className="container mx-auto py-4 px-8">
            <table class="table-auto mx-auto">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Nº</th>
                        <th class="px-4 py-2">Vítima/Delator</th>
                        <th class="px-4 py-2">Autoridade responsável</th>
                        <th class="px-4 py-2">Estado</th>
                        <th class="px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border px-4 py-2">169</td>
                        <td class="border px-4 py-2">Carlos Queroneia</td>
                        <td class="border px-4 py-2">Doug Stamper</td>
                        <td class="border px-4 py-2">Em aberto</td>
                        <td class="border px-4 py-2">
                        <button 
                        class="bg-blue-500 mx-4  hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-800 rounded"
                        data-toggle="modal"
                        data-target="seeReport"
                        onClick={this.handleClick}
                        >
                        
                            Ver
                        </button>
                        <button 
                        class="bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-800 rounded"
                        data-toggle="modal"
                        data-target="seeReport"
                        onClick={this.handleClick}
                        >
                        
                            Editar
                        </button>
                        </td>
                    </tr>
                        <tr class="bg-gray-100">
                        <td class="border px-4 py-2">2</td>
                        <td class="border px-4 py-2">Adam</td>
                        <td class="border px-4 py-2">112</td>
                        <td class="border px-4 py-2">858</td>
                        <td class="border px-4 py-2">858</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2">3</td>
                        <td class="border px-4 py-2">Chris</td>
                        <td class="border px-4 py-2">1,280</td>
                        <td class="border px-4 py-2">858</td>
                        <td class="border px-4 py-2">858</td>
                    </tr>
                </tbody>
            </table>
            <div className={`bg-gray-200 w-full mt-12 py-2 px-4 rounded-lg flex flex-col ${this.state.condition ? "hidden" : ""}`}>
            <PDFViewer>
                <MyDocument />
            </PDFViewer>
                {/**<div className="text-xl font-semibold mx-auto text-center bg-gray-theme w-full text-white rounded-lg">
                        <p>SECRETARIA DE SEGURANÇA PÚBLICA DA CIDADE DE RIBEIRÃO PIRES </p>
                        <p>DEPARTAMENTO DE POLÍCIA DE LOS SANTOS</p>
                        <p>BOLETIM DE OCORRÊNCIA</p>
                        <p>Nº<span>169</span></p>
                    </div>
                    <hr className="my-4"/>
                    <div className="text-lg font-semibold">VÍTIMA</div>
                    <ul>
                        <li>
                            <p><span className="font-semibold">Nome:</span> Carlos Queroneia</p>
                            <p><span className="font-semibold">Passaporte:</span> 949</p>
                            <p><span className="font-semibold">Telefone:</span> 758-865</p>
                            <p><span className="font-semibold">Gênero:</span> Masculino</p>
                            <p><span className="font-semibold">Profissão:</span> Civil</p>
                        </li>
                    </ul>
                    <hr className="my-4"/>
                    <div className="text-lg font-semibold">Relato</div>
                    <p>A vítima informou que chegou de bicicleta logo depois que os indivíduos já estavam no posto de gasolina. Pelo o que foi informado, um dos indivíduos ofereceu pedras de crack para a vítima que negou, dizendo que não usava esse tipo de porcaria. O indivíduo já alterado disse que a vítima estava falando mal do produto dele. Logo depois recebemos uma denúncia do civil Cirilo Snider informando que havia uma briga no posto de gasolina informado abaixo. Chegando no local, os oficiais Doug e Guimarães presenciaram um tumulto com cerca de 4 pessoas. Ao questionar o que estava acontecendo no local, a vítima acima foi ameaçada verbalmente que seria “quebrada” pelo suspeito abaixo informado. Como não se consumou a agressão, a vítima foi conduzida até a delegacia pra registrar a ameaça.</p>
                    <hr className="my-4"/>
                    <div className="text-lg font-semibold">Informações adicionais</div>
                    <ul>
                        <li>
                            <p><span className="font-semibold">Local da ocorrência:</span> Posto de Gasolina nº 19</p>
                            <p><span className="font-semibold">Testemunhas:</span> Oficial Doug, Guimarães</p>
                            <p><span className="font-semibold">Bens envolvidos:</span> N/A</p>
                        </li>
                    </ul> 
                    <hr className="my-4"/>
                    <div className="text-lg font-semibold">Informações do suspeito</div>
                    <ul>
                        <li>
                            <p><span className="font-semibold">Gênero:</span> Masculino</p>
                            <p><span className="font-semibold">Características:</span> Indivíduo negro, cabelo corte reto preto, camisa cinza, calça jeans clara;</p>
                        </li>
                    </ul>
                    <hr className="my-4"/>
                    <div className="text-lg font-semibold">Autoridade responsável</div> 
                    <p>Doug Stamper (123)</p>*/}
                </div>
            </section>
        </div>
    );
  }
}
