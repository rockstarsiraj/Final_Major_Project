from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import random
import werkzeug

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

UPLOAD_FOLDER = os.path.join(os.getcwd(), "static", "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        text = request.form.get("text")
        image = request.files.get("image")

        if not text:
            return jsonify({"error": "Missing text"}), 400
        if not image:
            return jsonify({"error": "Missing image"}), 400

        filename = werkzeug.utils.secure_filename(image.filename)
        image_path = os.path.join(UPLOAD_FOLDER, filename)
        image.save(image_path)

        result = random.choice(["REAL", "FAKE"])
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)