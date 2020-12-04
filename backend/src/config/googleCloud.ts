import { Storage } from '@google-cloud/storage';
import path from 'path';
const serviceKey = path.join(__dirname, './keys_cloud.json');

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: '102752806079914077738',
});

export default storage;
