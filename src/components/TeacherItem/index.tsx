import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/29918030?s=460&u=8d2fda7553b95821de04dedad2f2598ba6d067ab&v=4" alt="avatar"/>
                        <div>
                            <strong>Carlos Magno</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta por matemática e suas aplicações.
                        <br/><br/>
                        Adora ver o mundo através dos números.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 65,00</strong>
                        </p>
                        <button>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;