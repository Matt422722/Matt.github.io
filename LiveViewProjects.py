from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('D:\myRepository\Portfolio\LiveViewProjects\DjangoUniversity')
def project1():
    return render_template('DjangoUniversity', project_name="DjangoUniversity", description="Django code to add and delete universities.")

@app.route('D:\myRepository\Portfolio\LiveViewProjects\TicTacToe')
def project2():
    return render_template('TicTacToe', project_name="TicTacToe", description="TicTacToe Game.")


if __name__ == '__main__':
    app.run(debug=True)

