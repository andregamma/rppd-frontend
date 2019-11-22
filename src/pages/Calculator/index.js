import React, { Component } from 'react';
import Select from 'react-select'
import _ from 'lodash'

import Table from '../../components/Table'

export default class CalculatorPage extends Component {
    render() {
        return (
            <section id="calculator-page" className="container mx-auto py-4 px-8">
                <div className="border border-gray-400 p-4 overflow-y-visible">
                  <div className="overflow-y-visible w-full">
                    <Table x={13} y={100} id={'1'}  />
                  </div>
                  <iframe title="calculadora" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0YfJldXUB8_2P1oibVZUZFCizHce-UPpMbh1Tjo7NvY0uYpxj_TJGDVe-t9aL5RmTtGNPjCr-2Fg4/pubhtml?widget=true&amp;headers=false"></iframe>
                </div>
            </section>
        );
    }
}
