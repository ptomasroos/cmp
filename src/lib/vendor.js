import Promise from 'promise-polyfill';
import 'whatwg-fetch';
import config from './config';
import log from './log';
import { sendPortalCommand } from './portal';

/**
	* Attempt to load a vendor list from the local domain. If a
	* list is not found attempt to load it from the global list location
	* using the "portal" for cross domain communication.
*/
function fetchVendorList() {
	return fetch(config.globalVendorListLocation)
		.then(res => res.json())
		.catch(() => {
			log.debug('Configured vendors.json not found. Requesting global list');
			return sendPortalCommand({command: 'readVendorList'});
		});
}

function fetchPurposeList() {
	if (!config.storePublisherData || !config.customPurposeListLocation) {
		return Promise.resolve();
	}

	return fetch(config.customPurposeListLocation)
		.then(res => res.json())
		.catch(err => {
			log.error(`Failed to load custom purposes list from ${config.customPurposeListLocation}`, err);
		});
}

export {
	fetchVendorList,
	fetchPurposeList,
};
