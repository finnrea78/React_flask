from flask import Flask, request
import requests as req
from flask_cors import CORS
# from other_module import fn_from_model
# from dotenv import load_dotenv


# load_dotenv(dotenv_path ="C:\React_flask\image_gallary\api\.env.local")
# print(os.environ.get("UNSPLASH_ACCESS_KEY",))

UNSPLASH_KEY = "J7Ciuwb0CGTRiXaYqtFBVUJC5Dl5cH07ravM5lk-7v8"
# os.environ.get("UNSPLASH_KEY")
UNSPLASH_URL = "https://api.unsplash.com/photos/random"

app = Flask(__name__)
CORS(app)


@app.route('/new-image')
def new_image():
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1",
        "Authorization": f"Client-ID {UNSPLASH_KEY}",

    }
    params = {
        "query": word
    }
    response = req.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    print(data)
    return data

    # f"https://api.unsplash.com/photos/random/?query={word}&client_id={UNSPLASH_KEY}"


if __name__ == '__main__':
    app.run(debug=True, host="localhost", port="5001")
