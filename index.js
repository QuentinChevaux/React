class DegreeCelsius extends React.Component {

    constructor(props) {

        super(props)    //Initialise React Component

        this.state = { degrecelius: "0" } //this.state état du composant,

        //je créé une variable nom dans le state et je lui affecte une chaine vide
        this.chgInput = this.chgInput.bind(this)
    }

    chgInput(event) {

        console.log(event.target.value)

        this.setState({ nom: event.target.value })

    }
    render() {

        return <div>

            <h1>Hello, {this.state.nom}</h1>
            <input type="text" value={this.state.nom} onChange={this.chgInput} />

                </div>

    }

}

let app = <div>

    <Welcome></Welcome>

</div>

ReactDOM.render(app, document.getElementById("div_c"))