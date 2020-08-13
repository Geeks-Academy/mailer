// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (request, response) => {
	response.statusCode = 200;
	response.json({name: 'John Doe'});
};

export default handler;
