class Degree extends React.Component {

    constructor(props) {

        super(props)    //Initialise React Component

        this.state = { degrecelsius: "0", degreefahrenheit: "32", bout: "L'eau ne bout pas" }

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

        else {

            this.setState({ bout: "L'eau ne bout pas"})

        }

    }

    change_fahrenheit(event) {

        console.log(event.target.value)

        this.setState({ degrecelsius: ( event.target.value - 32 ) * ( 5 / 9 )})

        this.setState({ degreefahrenheit: event.target.value })
        }

    render() {

        let class_eau
        let bout

        if ( this.state.degrecelsius >= 100) {

            class_eau = 'img_display'

            bout = 'bout'

        }

        return <div className={class_eau}> 

            <h1>Convertisseur de Température : </h1>

            <div>

            <h2>Entrez votre valeur en °C : &nbsp;</h2>

            <input type="number" value={this.state.degrecelsius} onChange={this.change_celsius} />

            </div>

            <br />
            <br />

            <div>            
            <h2>Entrez votre valeur en °F : &nbsp;</h2>

            <input type="number" value={this.state.degreefahrenheit} onChange={this.change_fahrenheit} />
            
            </div>

            <p className={bout}> {this.state.bout} </p>

        </div>

    }

}

let deg = <div>

    <Degree></Degree>

</div>

ReactDOM.render(deg, document.getElementById("deg"))
