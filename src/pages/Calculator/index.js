import React, { Component } from 'react';

export default class CalculatorPage extends Component {
    render() {
        return (
            <section id="calculator-page" className="container mx-auto py-4 px-8">
                <div className="border border-gray-400 p-4 overflow-y-visible">
                  <iframe title="calculadora" src="https://docs.google.com/spreadsheets/d/1-6eOOrzCrljePq8qisd7jBhh9kF_kU6RYMdLqT5_PtM/edit?usp=sharing" class="w-full" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                </div>
            </section>
        );
    }
}
