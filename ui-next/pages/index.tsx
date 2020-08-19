import dynamic from 'next/dynamic';

const Grapes = dynamic(async () => import('../components/Editor'), {
	ssr: false
});

const Editor = () => <Grapes />;

export default Editor;
