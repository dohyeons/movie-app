import PropTypes from "prop-types";
import styled from './Button.module.css';

function Button ({text}) {
    return <button className={styled.btn}>눌러주세요</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button