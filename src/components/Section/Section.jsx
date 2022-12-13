import PropTypes from 'prop-types';
import styles from './section.module.css';

export default function Section({ title, children }) {
  return (
    <section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
