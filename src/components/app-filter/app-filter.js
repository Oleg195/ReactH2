import "./app-filter.css";

const AppFilter = (props) => {
    const buttonData=[
        {name:'all',label:'Все магазины'},
        {name:'rise',label:' Повышение товаров'},
        {name:'moreThen1000', label:'Дистанция более 1000км'}
    ];

    const buttons=buttonData.map(({name,label})=>{
        const active=props.filter===name;
        const classCss = active ? 'btn btn-light':'btn btn-outline-light';

        return(
            <button type="button"
            className="btn btn-light"
            onClick={()=>props.onFilterSelect(name)}
            key={name}>
                {label}
            </button>
        )
})
    return (
        <div className="btn-group">
           {buttons}
        </div>
    )
}

export default AppFilter;