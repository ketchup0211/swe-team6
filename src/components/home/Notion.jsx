import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Notion.module.css';
import NotionIcon from '../../assets/notion-icon.svg?react';
import ToggleIcon from '../../assets/toggle-icon.svg?react';

const Notion = memo(function Notion({ notion }) {
  return (
    <div id={styles.container}>
      <div id={styles.notionContainer}>
        <NotionIcon />
        <p className={styles.text}>{notion}</p>
      </div>
      <ToggleIcon />
    </div>
  );
});

Notion.propTypes = {
  notion: PropTypes.string,
};

Notion.defaultProps = {
  notion: '',
};

export default Notion;
