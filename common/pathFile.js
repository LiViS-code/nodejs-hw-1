import path from "path";
import * as url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const pathFile = path.join(dirname, "../db/contacts.json");

export default pathFile;
