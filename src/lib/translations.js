/**
 * The default set of translated pieces of text indexed by locale.
 * Values from window.__cmp.config.localization will override these
 * per locale.  Empty values will use the english value provided
 * inline in each component.
 */
export default {
	en: {
		intro: {
			title: 'Thanks for visiting ',
			domain: '',
			description: 'Ads help us run this site. When you use our site selected companies may access and use ',
			description2: ' for various ',
			description3: ' including to serve relevant ads or personalised content.',
			deviceInformation: 'information on your device',
			deviceInformationPopover: `
				<strong>Information that may be used:</strong>
				<ul>
					<li>Type of browser and its settings</li>
					<li>Information about the device's operating system</li>
					<li>Cookie information</li>
					<li>Information about other identifiers assigned to the device</li>
					<li>The IP address from which the device accesses a client's website or mobile application</li>
					<li>Information about the user's activity on that device, including web pages and mobile apps visited or used</li>
					<li>Information about the geographic location of the device when it accesses a website or mobile application</li>
				</ul>
			`,
			purposes: 'purposes',
			purposesPopover: `
				<strong>Purposes for storing information:</strong>
				<ul>
					<li>Storage and access of information</li>
					<li>Ad selection and delivery</li>
					<li>Content selection and delivery</li>
					<li>Personalization</li>
					<li>Measurement</li>
				</ul>
			`,
			acceptAll: 'OK, Continue to site',
			rejectAll: '',
			showPurposes: 'Learn more'
		},
		details: {
			title: 'Privacy preferences',
			cancel: 'Back',
			save: 'OK, Continue to site',
			showVendors: 'Show all companies',
			enableAll: 'Enable all',
			disableAll: 'Disable all'
		},
		purposes: {
			active: 'Active',
			inactive: 'Inactive',
			disclaimer: 'We and selected companies may access and use information for the purposes outlined. You may customise your choice or continue using our site if you are OK with the purposes. You can see the ',
			disclaimerVendorLink: 'complete list of companies here.',
			showVendors: 'Show companies',
			hideVendors: 'Hide companies',
			featureHeader: 'This will include the following features:',
			cookies: {
				menu: '',
				title: '',
				description: ''
			},
			purpose1: {
				description: 'Allow storing or accessing information on a user’s device.'
			},
			purpose2: {
				description: `Allow processing of a user’s data to provide and inform personalised advertising (including delivery, measurement, and reporting) based on a user’s preferences or interests known or inferred from data collected across multiple sites, apps, or devices; and/or accessing or storing information on devices  for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			purpose3: {
				description: `Allow processing of a user’s data to deliver content or advertisements and measure the delivery of such content or advertisements, extract insights and generate reports to understand service usage; and/or accessing or storing information on devices for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			purpose4: {
				description: `Allow processing of a user’s data to provide and inform personalised content (including delivery, measurement, and reporting) based on a user’s preferences or interests known or inferred from data collected across multiple sites, apps, or devices; and/or accessing or storing information on devices for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			customPurpose1: {
				menu: '',
				title: '',
				description: ''
			}
		},
		vendors: {
			title: '',
			rejectAll: '',
			acceptAll: '',
			company: '',
			offOn: '',
			description: 'Companies carefully selected by us will use your information. Depending on the type of data they collect, use, process and other factors, certain companies rely on your consent while others require you to opt-out. For information on each partner and to exercise your choices, see below. Or to opt-out, visit the ',
			or: 'or ',
			sites: 'sites.',
			description2: 'Customise how these companies use data on the ',
			description2Link: 'previous page.',
			privacyPolicy: 'Privacy Policy'
		}
	},
	de: {
		intro: {
			title: 'Diese Website verwendet Cookies ',
			domain: '',
			description: 'Wir und unsere Partner verwenden sogenannte Cookies (kleine Textdateien) im Webbrowser um zu verstehen, was unsere Besucher interessiert und entsprechend relevante Inhalte und Werbung anbieten zu können. Zukünftig benötigen wir wahrscheinlich ihr/euer Einverständnis dazu. Ein Beispiel, wie dies aussehen könnte, finden sie/findet ihr unter dieser Erklärung ',
			acceptAll: 'Alle Cookies akzeptieren',
			rejectAll: 'Alle Cookies ablehnen',
			showPurposes: 'Verwendungszwecke zeigen'
		},
		details: {
			title: 'Datenschutzeinstellungen',
			cancel: 'Abbrechen',
			save: 'Sichern und Beenden'
		},
		purposes: {
			active: 'Aktiv',
			showVendors: '',
			cookies: {
				menu: 'Wie wir Cookies einsetzen',
				title: 'Diese Website verwendet Cookies',
				description: 'Unsere Partner und wir setzen Cookies (kleine Textdateien) und sammeln Informationen während des Surfens im Web in diesem Browser. Dies dient dazu zu verstehen, was unsere Besucher interessiert und entsprechend relevante Inhalte und Werbung anbieten zu können.'
			},
			purpose1: {
				menu: 'Zugriff auf ein Gerät',
				title: 'Zugriff auf ein Gerät',
				description: 'Die Erlaubnis zum Speichern und Abrufen von Informationen auf dem Gerät eines Website-Besuchers.Das ist notwendig, um Cookies im Web-Browser zu speichern und zur Anzeige relevanter Informationen und Werbung abrufen zu können.'
			},
			purpose2: {
				menu: 'Persönlich angepaßte Werbung',
				title: 'Persönlich angepaßte Werbung',
				description: 'Die Erlaubnis, Besucherdaten so zu verarbeiten und/oder zu speichern und abzurufen, dass persönlich angepaßte Werbung angeboten und angezeigt werden kann (dies umfaßt die Auslieferung, Messung und die Erstellung von Berichten darüber). Dies erfolgt auf der Basis bekannter Präferenzen oder Interessen, oder durch das Schließen auf Präferenzen oder Interessen durch die Erfassung von Daten auch über verschiedene Websites, Apps oder Geräte hinweg zu diesem Zweck.'
			},
			purpose3: {
				menu: 'Analysen',
				title: 'Analysen',
				description: 'Die Erlaubnis, Besucherdaten zur Anzeige von Inhalten oder Werbung zu verarbeiten, und zur Messung der Auslieferung solcher Inhalte oder Werbung. Umfasst ist die Gewinnung von Erkenntnissen und die Generierung von Berichten um die Nutzung des angebotenen Service zu verstehen, und/oder das Abrufen oder Speichern von Informationen auf Geräten zu diesem Zweck.'
			},
			purpose4: {
				menu: 'Persönlich angepasste Inhalte',
				title: 'Persönlich angepasste Inhalte',
				description: 'Die Erlaubnis, Besucherdaten zur Anzeige von personalisierten Inhalten zu verarbeiten, und zur Messung der Auslieferung. Umfasst ist die Gewinnung von Erkenntnissen darüber und die Generierung von Berichten dazu. Dies erfolgt auf der Basis bekannter Präferenzen oder Interessen, oder durch das Schließen auf Präferenzen oder Interessen durch die Erfassung von Daten auch über verschiedene Websites, Apps oder Geräte hinweg zu diesem Zweck.'
			}
		},
		vendors: {
			title: 'Unsere Partner',
			rejectAll: 'Alle ablehnen',
			acceptAll: 'Alle akzeptieren',
			company: 'Unternehmen',
			offOn: 'Aus/An',
			description: 'Helfen Sie uns, Ihnen einen besseren Service zu bieten! Unsere Partner verwenden Cookies Ihres Browsers, um quer durch das Web zu verstehen, was Sie interessiert und Ihnen entsprechend relevante Inhalte und Werbung anzubieten.',
			privacyPolicy: ''
		}
	}
};
