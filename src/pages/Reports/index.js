import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { withRouter } from "react-router-dom";

import Card from '../../components/Card'

// import { Container } from './styles';
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    section: {
        marginLeft: 10,
        padding: 10,
        flexGrow: 1
    },
    text: {
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        marginLeft: 0,
    },
    textHeader: {
        fontSize: 16,
    },
});
const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.textHeader}>SECRETARIA DE SEGURANÇA PÚBLICA DA CIDADE DE RIBEIRÃO PIRES </Text>
          <Text style={styles.textHeader}>DEPARTAMENTO DE POLÍCIA DE LOS SANTOS </Text>
          <Text style={styles.textHeader}>Nº1</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.subtitle}>
                Informações básicas
            </Text>
            <Text style={styles.text}>Vítima: Colin Mandrak</Text>
            <Text style={styles.text}>Passaporte: 973</Text>
            <Text style={styles.text}>Local da ocorrência: Garagem Central, Delegacia</Text>
            <Text style={styles.text}>Testemunhas: N/A</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.subtitle}>
                Relato da vítima
            </Text>
            <Text style={styles.text}>
                Colin estava dirigindo para a garagem quando viu alguém em um carro roxo e preto de vidro escuro soltando um saco marrom no chão, Colin foi verificar e viu que dentro da sacola e tinha muito dinheiro mas estava pintado de azul, preocupado que o dono do dinheiro estivesse precisado dele, Colin veio até a delegacia onde o dinheiro foi entregue para o oficial Jhon Wick.
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.subtitle}>
                Informações do suspeito
            </Text>
            <Text style={styles.text}>

            </Text>
            <Text style={styles.text}>
                Gênero: N/A
            </Text>
            <Text style={styles.text}>
                Características: N/A
            </Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.subtitle}>
                Bens envolvidos
            </Text>
            <Text style={styles.text}>
                Dinheiro sujo
            </Text>
        </View>
      </Page>
    </Document>
);
class Reports extends Component {
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
        <>
        <section id="Reports" className="container mx-auto py-4 px-8">
            <div class="flex items-center">
                <div className="text-xl my-4 font-bold text-center uppercase text-gray-theme">Boletins de Ocorrência</div>
                <div class="hidden lg:block relative w-64 ml-4">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current text-gray-500">
                            <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                        </svg>
                    </span>
                    <input placeholder="Buscar..." class="block pl-9 pr-4 py-2 px-8 w-full bg-gray-theme rounded-lg text-sm placeholder-gray-400 text-white focus:bg-gray-700 focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none" />
                </div>
            </div>
            <hr className="mb-4"/>
            <div className="flex justify-between">
                <Card type="report" img="https://vignette.wikia.nocookie.net/nopixel/images/7/7a/Joseph.png/revision/latest?cb=20190630194937" name="José Cristiano" passport="973"/>
            </div>
            
            <div className={`bg-gray-200 w-full mt-12 py-2 px-4 rounded-lg flex flex-col ${this.state.condition ? "hidden" : ""}`} style={{height: '60rem'}}>
                <PDFViewer height="100%">
                    <MyDocument />
                </PDFViewer>
            </div>
        </section>
        </>
    );
  }
}
export default withRouter(Reports)
