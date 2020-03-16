import React, { Component } from "react";
import withContext from "../../filters/state/withFilter";
import { query } from '../../../OccurrenceSearch/api/queryAdapter';
import { GalleryPresentation } from './GalleryPresentation';
import merge from 'lodash/merge';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
			loading: true, 
			error: false, 
			size: 20,
			from: 0,
			data: {hits: {hits: []}},
		};
  }

  loadData = () => {
		this.setState({ loading: true, error: false });
		if (this.runningQuery && this.runningQuery.cancel) this.runningQuery.cancel();
		
		let filter = merge({}, this.props.filter, {
      must: {
				gallery_media_type: ["StillImage"],
				// occurrenceId: ["http://bins.boldsystems.org/index.php/Public_RecordView?processid=EPRBE064-18"],
			}
		});
		
    this.runningQuery = query(filter, this.state.size, this.state.from);
		this.runningQuery.then(response => {
        if (this._isMount) {
					// extract first image in occurrence
					response.data.hits.hits.forEach(occ => {
						occ._source._galleryImages = occ._source.multimediaItems.filter(img => img.type === 'StillImage');
						console.log(occ._source._galleryImages);
					});
					this.setState({ loading: false, error: false, data: response.data });
				}
      })
      .catch(err => {
				console.error(err);//TODO error handling
				if (this._isMount) {
					this.setState({ loading: false, error: true });
				}
			});
  };

  componentDidMount() {
    this._isMount = true;
    this.loadData();
	}

	componentDidUpdate(prevProps) {
    if (prevProps.filterHash !== this.props.filterHash) {
			this.setState({from: 0}, this.loadData);
    }
  }
	
	next = () => {
		this.setState({from: Math.max(0, this.state.from + this.state.size)}, this.loadData);
	}

	prev = () => {
		this.setState({from: Math.max(0, this.state.from - this.state.size)}, this.loadData);
	}

	first = () => {
		this.setState({from: 0}, this.loadData);
	}

  render() {
		return <GalleryPresentation error={this.state.error} loading={this.state.loading} result={this.state.data} next={this.next} prev={this.prev} first={this.first} size={this.state.size} from={this.state.from} />
  }
}

const mapContextToProps = ({ filter, filterHash, api, components }) => ({ filter, filterHash, api, components });
export default withContext(mapContextToProps)(Gallery);
