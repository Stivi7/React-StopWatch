import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class StopWatch extends React.Component {
    state = {lapse: 0, running: false}

    handleRunClick = () => {
        this.setState(state => {
            if (state.running) {
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.lapse;
                this.timer = setInterval(() => {
                    this.setState({lapse: Date.now() - startTime});
                })
            }
            return {running: !state.running}
        })
    }

    handleClearClick = () => {
        clearInterval(this.timer)
        this.setState({lapse: 0, running: false})
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        

        const {lapse, running} = this.state;
        return (
            <div>
                <label>{lapse}ms</label>
                <button onClick={this.handleRunClick}>{running ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleClearClick}>Clear</button>
            </div>
        )
    }
}

ReactDOM.render(<StopWatch />, document.getElementById('root'))
registerServiceWorker();
