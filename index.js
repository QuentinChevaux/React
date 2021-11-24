class Degree extends React.Component {

    constructor(props) {

        super(props)    //Initialise React Component

        this.state = { degrecelsius: "0", degreefahrenheit: "32", bout: "L'eau ne bout pas" } //this.state état du composant,

        this.change_celsius = this.change_celsius.bind(this) // variable avec chaine vide

        this.change_fahrenheit = this.change_fahrenheit.bind(this)
    }

    change_celsius(event) {

        this.setState({ degrecelsius: event.target.value })

        this.setState({ degreefahrenheit: ( event.target.value * (9 / 5) + 32 )})

        if (event.target.value >= 100) {

            this.setState({ bout: "L'eau bout"})

            console.log(event.target.value)

        }

    }

    change_fahrenheit(event) {

        console.log(event.target.value)

        this.setState({ degrecelsius: ( event.target.value - 32 ) * ( 5 / 9 )})

        this.setState({ degreefahrenheit: event.target.value })

        if (event.target.value >= 212) {

            this.setState({ bout: "L'eau bout"})

            console.log(event.target.value)

        }

    }

    render() {

        return <div> 

            <div className="flex">

            <h2>Entrez Votre valeur en °C : &nbsp;</h2>

            <input type="number" value={this.state.degrecelsius} onChange={this.change_celsius} />

            </div>

            <br />
            <br />

            <div className="flex">            
            <h2>Entrez Votre valeur en °F : &nbsp;</h2>

            <input type="number" value={this.state.degreefahrenheit} onChange={this.change_fahrenheit} />
            
            </div>

            <br />
            <br />

            <div>

            <p> {this.state.bout} </p>

            </div>

        </div>

    }

}


let deg = <div>

    <Degree></Degree>

</div>

ReactDOM.render(deg, document.getElementById("deg"))
