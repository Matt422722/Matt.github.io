from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Root folder for projects
PROJECTS_FOLDER = os.path.join(os.getcwd(), 'LiveViewProjects')

@app.route('/')
def home():
    # Render the main index with links to the projects
    return render_template('index.html')

# Route for  TicTacToe project
@app.route('/TicTacToe')
def project1():
    return send_from_directory(os.path.join(PROJECTS_FOLDER, 'TicTacToe.html'), 'index.html')


if __name__ == '__main__':
    app.run(debug=True)

