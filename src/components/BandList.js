import React, {Component} from 'react'

class BandList extends Component {
    componentDidMount = () => {
        this.props.getBands();
    }
    componentWillUnmount = () => {
        this.props.resetLoader(true);
    }
    render = () => ((this.props.loading)
        ? (
            <div className="ui active centered inline loader" style={{marginTop:'20px'}}></div>
        )
        : (
            <table className="ui segment table" style={{
                marginTop: '5px'
            }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>Website</th>
                        <th>Still Active</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.bands.map((band, key) => (
                        <tr key={key}>
                            <td>{band.name}</td>
                            <td>{band.start_date}</td>
                            <td>{band.website}</td>
                            <td>{band.still_active
                                    ? 'Yes'
                                    : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ))
}

export default BandList;
