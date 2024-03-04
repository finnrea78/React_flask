from flask import Flask, request
from other_module import fn_from_model


UNSPLASH_KEY = "J7Ciuwb0CGTRiXaYqtFBVUJC5Dl5cH07ravM5lk-7v8"
UNSPLASH_URL = "https://api.unsplash.com/photos/random"

app = Flask(__name__)

@app.route('/new-image')
def new_image():
    word = request.args.get("query")
    return {"word": word}

    #f"https://api.unsplash.com/photos/random/?query={word}&client_id={UNSPLASH_KEY}"


if __name__ == '__main__':
    app.run(debug=True, host="localhost", port="5001")