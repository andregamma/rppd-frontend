import React, { Component } from 'react';
import { GiPoliceBadge } from "react-icons/gi";
import { Link, withRouter } from "react-router-dom";

import Card from '../../components/Card'

class Profile extends Component {
  render() {
    const { url } = this.props.match;
    return (
        <div className="Profile">
            <div className="text-xl my-4 font-bold text-center uppercase text-gray-theme">Oficiais cadastrados</div>
            <section className="container mx-auto py-4 px-8">
                <div className="flex flex-wrap justify-between">
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    <Card type="cops" img="https://cdn.discordapp.com/attachments/604772785176313856/640998615921197066/MARRENTO.png" name="Pelé" passport="32"/>
                    
                </div>
            </section>
        </div>
    );
  }
}
export default withRouter(Profile)
