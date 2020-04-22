import React from "react";
import Joke from "./Joke";

function App() {
    return (
        <div className="header content-center">
            <h1>Топовые шутейки(нет)</h1>
            <ul className="joke">
              
            <p></p>
                 <Joke question="Летят по небу два крокодила — синий и красный"
                    punchLine="особенно красный"
                />
               
              <p></p>
                 <Joke question="приходит Иисус к своему отцу"
                    punchLine="а его нет"
                />
               
                <p></p>
                 <Joke question="Почему бог не создал жизнь до большого взрыва?"
                    punchLine="Да как-то времени не было"
                />
                <p></p>
                  <Joke question="Почему кошки научились видеть в темноте?"
                    punchLine="Потому что не достают до выключателя"
                />
                  <p></p>
                  <Joke question="Вовочка, почему ты приходишь в школу с грязными руками?"
                    punchLine="А у меня других нет."
                    
                />
            </ul>
        </div>
    );
}


export default App   