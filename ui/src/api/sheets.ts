import axios, { AxiosRequestConfig } from "axios"
import querystring from "query-string"
import { ip } from '../shared/sheets.json'

const DEBUG = false
// const redirectUri = "http://localhost:3000"

const instanceHeaders = {
    // "Access-Control-Allow-Origin": redirectUri,
    // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Content-Type": "application/json"
}

const instance = axios.create({
    baseURL: `http://${ip}:5000`,
    timeout: 1000 * 60,
    headers: instanceHeaders
})

const logger = (data: any, url: string) => {
    DEBUG &&
        console.log(url,
            `\n\t status: ${data.status}`,
            `\n\t payload: `, data.data)
    return data.data
}

interface RequestInput extends AxiosRequestConfig {
    url?: string
    headers?: {
        [key: string]: string
    }
    multipart?: boolean
    query?: {
        [key: string]: string
    }
}

const request = (url: string, config: RequestInput = {}): Promise<any> => {
    DEBUG && console.log(url, "config", config)
    let req: RequestInput = {
        url,
        ...config,
    }
    if (!req.headers) {
        req.headers = instanceHeaders
    }
    if (config.multipart) {
        req.headers["Content-Type"] = "multipart/form-data"
    }
    if (config.query && Object.keys(config.query).length !== 0) {
        req.url +=
            "?" + querystring.stringify(config.query, { arrayFormat: "bracket" })
    }
    return instance
        .request(req)
        .then((data) => {
            return logger(data, url)
        })
        .catch((err) => {
            return Promise.reject({
                message: err.message,
                name: err.name,
                text: err.toString(),
                request: req
            })
        })
}

class SHEETSAPI {
    getAllAddresses(): Promise<any> {
        const url = "/mailing-addresses"
        const config: RequestInput = {
            method: "POST" 
        }
        return request(url, config)
    }
    getAddressesWithTags(tags=[]): Promise<any> {
        const url = "/mailing-addresses"
        const config: RequestInput = {
            method: "POST" 
        }
        return request(url, config)
    }
}
const SheetsApi = new SHEETSAPI()
export default SheetsApi