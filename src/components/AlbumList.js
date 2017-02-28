import React, {Component} from 'react'
import Menu from './Menu'

class AlbumList extends Component {
    componentDidMount = () => {
        this.props.getAlbums(0, {
            field: 'id',
            order: 'asc'
        });
    }
    componentWillUnmount = () => {
        this.props.resetLoader(true, true);
    }
    render = () => (
        <div>
            <Menu/>
            <div className="ui grid container">
                <div className="row">
                    <div className="right floated column">
                        <button className="positive ui right floated button">New Album</button>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        {(this.props.loading.listLoading)
                            ? (
                                <div className="ui active centered inline loader" style={{
                                    marginTop: '20px'
                                }}></div>
                            )
                            : (
                                <div style={{
                                    marginTop: '5px'
                                }}>
                                    <form className="ui form">
                                        <div className="field">
                                            <select ref={node => this.bandSelect = node} onChange={e => {
                                                this.props.getAlbums(this.bandSelect.value, this.props.sort)
                                            }}>
                                                <option value="0">All Bands</option>
                                                {this.props.bands.map((band, key) => (
                                                    <option value={band.id} key={key}>{band.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </form>
                                    <table className={this.props.loading.tableLoading
                                        ? 'ui loading segment table sortable'
                                        : 'ui segment table sortable'} style={{
                                        marginTop: '5px'
                                    }}>
                                        <thead>
                                            <tr>
                                                <th className={this.props.sortCheck(this.props.sort, 'name')} onClick={e => this.props.getAlbums(this.bandSelect.value, this.props.getSort(this.props.sort, 'name'))}>Name</th>
                                                <th className={this.props.sortCheck(this.props.sort, 'recorded_date')} onClick={e => this.props.getAlbums(this.bandSelect.value, this.props.getSort(this.props.sort, 'recorded_date'))}>Recorded Date</th>
                                                <th className={this.props.sortCheck(this.props.sort, 'release_date')} onClick={e => this.props.getAlbums(this.bandSelect.value, this.props.getSort(this.props.sort, 'release_date'))}>Release Date</th>
                                                <th className={this.props.sortCheck(this.props.sort, 'number_of_tracks')} onClick={e => this.props.getAlbums(this.bandSelect.value, this.props.getSort(this.props.sort, 'number_of_tracks'))}>No. of tracks</th>
                                                <th className={this.props.sortCheck(this.props.sort, 'label')} onClick={e => this.props.getAlbums(this.bandSelect.value, this.props.getSort(this.props.sort, 'label'))}>Label</th>
                                                <th className={this.props.sortCheck(this.props.sort, 'producer')} onClick={e => this.props.getAlbums(this.bandSelect.value, this.props.getSort(this.props.sort, 'producer'))}>Producer</th>
                                                <th className={this.props.sortCheck(this.props.sort, 'genre')} onClick={e => this.props.getAlbums(this.bandSelect.value, this.props.getSort(this.props.sort, 'genre'))}>Genre</th>
                                                <th className={this.props.sortCheck(this.props.sort, 'bands.name')} onClick={e => this.props.getAlbums(this.bandSelect.value, this.props.getSort(this.props.sort, 'bands.name'))}>Band</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.albums.map((album, key) => (
                                                <tr key={key}>
                                                    <td>{album.name}</td>
                                                    <td>{album.recorded_date}</td>
                                                    <td>{album.release_date}</td>
                                                    <td>{album.number_of_tracks}</td>
                                                    <td>{album.label}</td>
                                                    <td>{album.producer}</td>
                                                    <td>{album.genre}</td>
                                                    <td>{album.band_name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumList;
