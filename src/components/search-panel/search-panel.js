import './search-panel.css';
import {Component} from 'react'

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state={
            term:""
        }
    }
    onUpdateSearch=(e)=>{
        const term=e.term.value;
this.setState({term});
this.onUpdateSearch(term);
    }
    render(){
    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти Магазин"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
    )
}
}

export default SearchPanel;