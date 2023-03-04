import { client } from "./sanity";

client
  .fetch('*[_type == "restaurant"]')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
