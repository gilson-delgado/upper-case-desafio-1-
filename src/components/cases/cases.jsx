import Case from "../case/case";

const casesTitle = ['Título card 1', 'Título card 2', 'Título card 3']

const transform = (upperTransform) => {
  console.log(upperTransform)
}

const Cases = () => {
    
        
    return (
  
        <section className="case">
              <h1 style={{textTransform: "uppercase", fontFamily: "cursive"}}>transformando textos em letras <span style={{color:"white"}}>maiusculas</span></h1>
           
            <article>
                {casesTitle.map((casesTitle, index) => {
                    return (
                    
                        <Case key={index} transform={transform}>
                           <p style={{textTransform: "uppercase"}}>Texto principal modificado;{index + 1}</p>
                        </Case>
               
                    );
                }
            )
        }
                        <Case color="blue" transform={transform}>
                            <h3 style={{textTransform:"upperCase", color:"red", fontSize:"40px"}}> Texto secundario esta em maiusculas e a linha logo abaixo nao foi modificado. </h3>
                            <p style={{color:"white", fontSize:"22px"}}>Já faz alguns dias que não chove!</p>
                        </Case>

                        <Case color="orange" transform={transform}>                    
                            <h3 style={{textTransform:"upperCase"}}> Esse <strong style={{color:"red"}}>texto</strong> está com as letras maiusculas também, mas a linha abaixo não./</h3>
                            <p style={{fontSize:"15px", color: "blue", backgroundColor:"green"}}>Esse é um texto com o fundo verde</p>              
                        </Case>
            </article>
        </section>
     
    );
}


export default Cases;