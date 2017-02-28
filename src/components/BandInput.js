import React, {Component} from 'react'

class BandInput extends Component {
    componentDidMount = () => {
        $('#StartDate').calendar({type: 'date'});
    }
    componentWillUnmount = () => {}
    render = () => (
        <div className="ui container grid">
            <div className="row">
                <div className="column">
                    <h2>Create Band</h2>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <form className="ui form">
                        <div className="required field">
                            <label>Name</label>
                            <input ref={node => this.Name = node} type="text" name="name" placeholder="Rockers"/>
                        </div>
                        <div className="field">
                            <label>Start Date</label>
                            <div className="ui calendar" id="StartDate">
                                <div className="ui input">
                                    <input ref={node => this.StartDate = node} onBlur={e=>console.log(this.StartDate.value)} type="text" placeholder="Date"/>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Website</label>
                            <input ref={node => this.Website = node} type="text" name="start_date" placeholder="example.com"/>
                        </div>
                        <div className="inline fields">
                            <label htmlFor="still_active">Still Active</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input ref={node => this.StillActiveYes = node} name="still_active" type="radio" id="StillActiveYesCheck" className="hidden"/>
                                    <label htmlFor="StillActiveYesCheck">Yes</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input ref={node => this.StillActiveNo = node} name="still_active" type="radio" id="StillActiveNoCheck" className="hidden"/>
                                    <label htmlFor="StillActiveNoCheck">No</label>
                                </div>
                            </div>
                        </div>
                        <button onClick={e=>{this.props.postBand({name: this.Name.value, start_date: this.StartDate.value, website: this.Website.value, still_active: this.StillActiveYes.checked?true:this.StillActiveNo.checked?false:null})}} className="ui button" type="button">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BandInput;
