import React, {Component} from 'react'

class BandList extends Component {
    componentDidMount = () => {
        this.props.getBands({field: 'id', order: 'asc'});
    }
    componentWillUnmount = () => {
        this.props.resetLoader(true, true);
    }
    render = () => ((this.props.loading.listLoading)
        ? (
            <div className="ui active centered inline loader" style={{
                marginTop: '20px'
            }}></div>
        )
        : (
            <table className={this.props.loading.tableLoading
                ? 'ui loading segment table sortable'
                : 'ui segment table sortable'} style={{
                marginTop: '5px'
            }}>
                <thead>
                    <tr>
                        <th className={this.props.sortCheck(this.props.sort, 'name')} onClick={e=>this.props.getBands(this.props.getSort(this.props.sort, 'name'))}>Name</th>
                        <th className={this.props.sortCheck(this.props.sort, 'start_date')} onClick={e=>this.props.getBands(this.props.getSort(this.props.sort, 'start_date'))}>Start Date</th>
                        <th className={this.props.sortCheck(this.props.sort, 'website')} onClick={e=>this.props.getBands(this.props.getSort(this.props.sort, 'website'))}>Website</th>
                        <th className={this.props.sortCheck(this.props.sort, 'still_active')} onClick={e=>this.props.getBands(this.props.getSort(this.props.sort, 'still_active'))}>Still Active</th>
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
