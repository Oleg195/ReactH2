import "./app-info.css";

const AppInfo = ({inc,emp}) => {
    return (
        <div className="app-info">
            <h1>Учет магазинов</h1>
            <h2>Общее число: {emp}</h2>
            <h2>Особенный заказчик: {inc}</h2>
        </div>
    )
}
export default AppInfo;