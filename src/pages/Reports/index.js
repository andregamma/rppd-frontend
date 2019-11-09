import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { FaAddressCard } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";

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
    const { url } = this.props.match;
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
            <div className="md:flex md:justify-between">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="rounded-lg md:w-32" src="https://image.prntscr.com/image/KOawqlR4RxK82kcv2sWzUQ.png" alt="Jhon Wick" />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <div className="flex flex-row items-center uppercase tracking-wide text-sm text-yellow-theme font-bold">
                            <FaAddressCard />
                            <span className="ml-2">973</span>
                        </div>
                        <Link to="/profile/1" className="block mt-1 text-lg leading-tight font-semibold text-gray-900">Colin Mandrak</Link>
                        <p className="mt-2 text-gray-600">Texto descritivo</p>

                        <div className="flex mt-4 justify-between">
                            <Link to={`${url}/1`} class="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white">
                                Mais detalhes
                            </Link>
                            <Link to="#" class="inline-block px-3 py-2 mx-4 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white">
                                Baixar PDF
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="rounded-lg md:w-32" src="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" alt="Ivan Palace" />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="flex flex-row items-center uppercase tracking-wide text-sm text-yellow-theme font-bold"><FaAddressCard /><span className="ml-2">02</span></div>
                        <Link to="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900">Ivan Palace</Link>
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            
        <div className={`bg-gray-200 w-full mt-12 py-2 px-4 rounded-lg flex flex-col ${this.state.condition ? "hidden" : ""}`} style={{height: '60rem'}}>
        <PDFViewer height="100%">
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
        </>
    );
  }
}
export default withRouter(Reports)
