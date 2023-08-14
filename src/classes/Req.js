class Req {
    constructor(method, body, path) {
        this.method = method;
        this.headers = {
            'Content-Type' : 'application/json'
        },
        this.body = body;
        this.path = path;
    }
}

export default Req;