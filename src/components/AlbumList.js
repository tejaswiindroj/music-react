import React, {Component} from 'react'

class AlbumList extends Component {
    componentDidMount = () => {
        this.props.getAlbums(0);
    }
    componentWillUnmount = () => {
        this.props.resetLoader(true);
    }
    render = () => ((this.props.loading.listLoading)
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
                            this.props.getAlbums(this.bandSelect.value)
                        }}>
                            <option value="0">All Bands</option>
                            {this.props.bands.map((band, key) => (
                                <option value={band.id} key={key}>{band.name}</option>
                            ))}
                        </select>
                    </div>
                </form>
                <table className={this.props.loading.albumsFilterLoading
                    ? 'ui loading segment table'
                    : 'ui segment table'} style={{
                    marginTop: '5px'
                }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Recorded Date</th>
                            <th>Release Date</th>
                            <th>No. of tracks</th>
                            <th>Label</th>
                            <th>Producer</th>
                            <th>Genre</th>
                            <th>Band</th>
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
                                <td>{album.band.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        ))
}

export default AlbumList;
