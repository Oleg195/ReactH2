import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {Component} from 'react';
import './app.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [
        {name: 'Елизавета',salary: 800,rise:true, increase: false,id:1},
        {name: 'Magnum',salary: 3000,rise:false, increase: true,id:2},
        {name: 'TechnoDom',salary: 5000,rise:false, increase: false,id:3}
      ],
      term:'',
      filter:"all"

    }
    this.maxId=4;
  }
  deleteItem=(id)=>{
    this.setState(({data})=>{
      return{
        data: data.filter(item=>item.id!==id)
      }
    })
  }
  addItem=(name,salary)=>{
    const newItem={
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({data})=>{
      const newArr=[...data,newItem];
      return{
        data: newArr
      }
    });
  }

  filterPost=(items,filter)=>{
    switch(filter)
    {
case'rise':
return items.filter(item=>item.rise);
case 'moreThen1000':
  return items.filter(item=>item.salary>1000);
  default:
  return items
    }
  }

  searchEmp=(items,term)=>{
    if (term.length===0){
      return items
    }
    items.filter(items=>{
      return  items.names.indexOf(term)>-1
  })}

onUpdateSearch=(term)=>(
this.setState({term})
)

// onToggleIncrease=(id)=>{
//   this.setState(({data})=>{
//     const index=data.findIndex(elem=>elem.id===id)
//     const old=data[index]
//     const newItem={...old,increase:! old.increase}
//     const newArray=[...data.slice(0,index),newItem,data.slice(index+1)]
//     return{data: newArray}
//   })
// }
// onToggleRise=(id)=>{
//   this.setState(({data})=>({
//     data:data.map(item=>{
//       if( item.id===id)
//       {
//         return{ ... item, rise:!item.rise}
//       }
//       return item
//     })
//   }))
// }
onToggleProp=(id,prop)=>{
  this.setState(({data})=>({
    data:data.map(item=>{
      if (item.id===id){
        return{...item,[prop]:!item[prop]}
      }
      return item;
    })
  }))
}
  onFilterSelect=(filter)=>
  {
    this.setState({filter});
  }
  
  render(){

    const {term,data,filter}=this.state;
    const countEmp=this.state.data.length
    const increase=this.state.data.filter(item=> item.increase).length
    const visibleData=this.filterPost(
      this.searchEmp(data,term),filter)

  return (
    <div className="app">
        <AppInfo emp={countEmp} inc={increase}/>

        <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeesList 
        data={visibleData}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm
        onAdd={this.addItem}/>
    </div>
  );
}
}

export default App;
