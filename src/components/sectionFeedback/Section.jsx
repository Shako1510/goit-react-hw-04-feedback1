import PropTypes from 'prop-types';
import { SectionTitle } from './SectionStyled';


const Section = ({ title, children }) => {
    return (
        <section>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Section;