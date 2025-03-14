from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/run')
def run_python_script():
    with open("Game-Engine.py", "r") as file:
        code = file.read()
    return f"<pre>{code}</pre>"

if __name__ == '__main__':
    app.run(debug=True, host='8.8.0.0', port=3000)
