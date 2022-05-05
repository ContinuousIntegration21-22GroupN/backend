import http from 'http';
import { getAllCharacters, getOneCharacterById } from './dao/dao_characters';

import { sendHttpError, sendHttpResponse } from './utils';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method !== 'GET') {
        sendHttpError(res, { status: 404 });
    }
    const [, resource, id] = req.url?.split('/') || [];

    switch (resource) {
        case 'characters': {
            if (!id) {
                sendHttpResponse(res, { data: getAllCharacters() });
                return;
            }

            const character = getOneCharacterById(id);
            if (character) {
                sendHttpResponse(res, {
                    data: character,
                });
            } else {
                sendHttpError(res, { status: 404, message: 'Character not found' });
            }
            break;
        }
        default: {
            sendHttpError(res, { status: 404 });
            break;
        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default server;
