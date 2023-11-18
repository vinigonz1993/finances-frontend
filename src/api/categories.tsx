import axios from "axios";
import request from "../request";

export default {
    get: () => request.get('categories/'),
};
