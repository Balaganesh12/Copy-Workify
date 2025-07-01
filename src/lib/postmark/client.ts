import { ServerClient } from 'postmark';

const postmarkClient = new ServerClient(process.env.POSTMARK_SERVER_KEY!);

export default postmarkClient;
