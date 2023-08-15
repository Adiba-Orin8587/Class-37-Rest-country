import "./Country.css"

const Country = (props) => {
    const { name, capital, population, flags } = props.country;
    return (
        <div className="country">
            <h5>Name : <span> {name.common}</span></h5>
            <h5>Capital :<span> {capital} </span></h5>
            <p><b> Population :<span> {population}</span></b></p>
            <img src={flags.png} alt="" />
        </div>
    )
}

export default Country;