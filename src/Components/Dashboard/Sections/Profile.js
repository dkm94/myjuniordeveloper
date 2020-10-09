import React, { Component } from 'react';
import Multiselect from "./Multiselect";

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("NewProps:", newProps);
        console.log("NewState:", newState);
        return true
    }


    getInputValue = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        this.props.handleChange(fieldName, fieldValue);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("triggered");
        this.props.onSubmit(e);
    }

    render() {

        // console.log(this.props)
        // console.log(this.props.name)
        return (
            <div className="render-infos">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-4">Nom</label>
                        <div className="col-sm-8">
                        <input type="text" name="name" value={this.props.name} className="form-control" id="input-h" onChange={this.getInputValue}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4">Poste souhaité</label>
                        <div className="col-sm-8">
                        <input type="text" name="job" value={this.props.job} className="form-control" id="input-h" onChange={this.getInputValue}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4">Introduction</label>
                        <div className="col-sm-8">
                        <textarea name="bio" value={this.props.bio} onChange={this.getInputValue} className="form-control" style={{height: "100px"}} placeholder="Présentez-vous avec un court texte ou une citation qui vous correspond, par exemple"/>
                        </div>
                    </div>
{/* 
                    <div className="form-group row">
                        <div className="col-sm-4">Type de contrat</div>
                        <div className="col-sm-8">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" style={{ marginRight: "5px"}} />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Contrat de professionnalisation
                                </label><br />
                                <input className="form-check-input" type="checkbox" style={{ marginRight: "5px"}}/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Contrat d'apprentissage
                                </label><br />
                                <input className="form-check-input" type="checkbox" style={{ marginRight: "5px"}} />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Stage
                                </label>
                            </div>
                        </div>
                    </div> */}

                    <div className="form-group row">
                        <div className="col-sm-4">Pour une durée de</div>
                        <div className="col-sm-8 dp-flex">
                            <input type="text" name="time" value={this.props.time} className="form-control nb-input" id="input-h" style={{ marginRight: "5px"}} onChange={this.getInputValue}/>
                            <p> mois</p>
                        </div>
                    </div>
{/* 
                    <fieldset className="form-group">
                        <div className="row">
                        <label className="col-sm-4">Disponibilité</label>
                        <div className="col-sm-8">
                            <div className="form-check">
                            <input className="form-check-input" onChange={this.handleChange} type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Imméadiate
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="gridRadios2" style={{ margin: "0 5px"}} >
                                À partir du
                            </label>
                            <input type="date" name="date" className="form-check-input" onChange={this.handleChange}/>
                            </div>
            
                        </div>
                        </div>
                    </fieldset> */}

                    <div className="form-group row">
                        <label className="col-sm-4">Mobilité</label>
                        <div className="col-sm-8">
                            <Multiselect name="mobility" value={this.state.mobility} />
                        </div>
                    </div>

                    {/* <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4" htmlFor="customFile">Photo de profil</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4" htmlFor="customFile">Bannière</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4" htmlFor="customFile">CV</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div> */}
                    
                    <div className="form-group row flex-end">
                        <div className="col-sm-8 flex-end">
                        <button type="submit" value="Submit" className="btn">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

