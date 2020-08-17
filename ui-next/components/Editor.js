import grapesJS from 'grapesjs';
import grapesJSMJML from 'grapesjs-mjml';
import {useEffect} from 'react';

const Grapes = () => {
	useEffect(() => {
		grapesJS.init({
			fromElement: true,
			container: '#gjs',
			avoidInlineStyle: false,
			plugins: [grapesJSMJML],
			pluginsOpts: {
				[grapesJSMJML]: {
					/* ...options */
				}
			}
		});
	}, []);

	return (
		<div id="gjs">
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-divider border-color="#F45E43" />
							<mj-divider border-color="#F45E43" />
							<mj-text font-size="20px" color="#F45E43" font-family="helvetica">
								Hello World
							</mj-text>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		</div>
	);
};

export default Grapes;
