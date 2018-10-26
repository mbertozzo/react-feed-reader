import React from 'react';

import styles from './style.module.css'
import { API_KEY } from './../../redux/apikey'; 
import { updateSource } from '../../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    source: state.source
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSourceUpdate: (id, name) => {
      dispatch(updateSource(id, name))
    }
  }
}

class Headlines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: []
    }
  }
  
  componentDidMount() {
    fetch('https://newsapi.org/v2/sources?apiKey='+API_KEY)
      .then(r => r.json())
      .then(data => this.setState({ sources: data.sources }))
  }

  render() {
    const { sources } = this.state;
    const { source, handleSourceUpdate } = this.props;

    return (  
      <div>
        <select 
          className={styles.inputField} 
          onChange={(e) => {
            e.preventDefault();
            const selectedIndex = e.target.options.selectedIndex;
            const sourceId = e.target.options[selectedIndex].getAttribute('data-ids');
            handleSourceUpdate(sourceId,e.target.value)
          }
        }>
          {sources.map((source, i) => (<option key={i} data-ids={source.id}>{source.name}</option>))}
        </select>
        {
          (source.name) ?
            (<p>Headlines from <strong>{source.name}</strong>.</p>)
            : (<p></p>)
        }
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Headlines);