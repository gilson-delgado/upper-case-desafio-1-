import PropTypes from "prop-types";
import "./case.css";

const Case = ({ children, color, transform }) => {
    return (
        <section className="case" style={{ backgroundColor: color }} 
            onClick={() => transform(color)}>{children}
        </section>
    );
};

Case.defaultProps = {
    color: "green",
};

// Aqui é só uma validação para garantir que o componente seja usado corretamente, não é obrigatório
Case.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    transform: PropTypes.func,
};

export default Case;

/*
  Se caso se deparar com o erro no console: 
  - Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
  Isso siginifca que futuramente as defaultProps não vão mais ser usadas. Então o componente Card ficaria mais ou menos assim: 

  const Card = ({ children, color = "orange", showCardColor }) => {
    return (
        <div
            className="card"
            style={{ backgroundColor: color }}
            onClick={() => showCardColor(color)}
        >
            {children}
        </div>
    );
};

*/



