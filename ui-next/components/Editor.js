import grapesJS from 'grapesjs';
import grapesJSMJML from 'grapesjs-mjml';
import { useEffect } from 'react';


const Grapes = () => {
	useEffect(() => {
		const editor = grapesJS.init({
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

		editor.Panels.addButton('options',
			[{
				id: 'save', className: 'fa fa-floppy-o icon-blank',
				command: function (editor1, sender) { 
					console.log(editor1.getHtml())
					// prompt wystarczy
					alert('zapisz mjml przez mikroservis') },
				attributes: { title: 'Save Template' }
			},{
				id: 'load', className: 'fa fa-upload icon-blank',
				command: function (editor1, sender) { 
					console.log(editor1.getHtml())
					alert('załaduj szablon templatki po nazwie do edycji') },
				attributes: { title: 'Load Template' }
			}]);

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
